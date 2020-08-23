const {rewriteTableName} = require("./rewriters/CommonRewriter");
const { parse } = require('./QueryParser')
const { rewrite } = require('./QueryRewriter')

module.exports = { query, convert }

/**
 * Execute SQL query using MongoDB
 * @param db
 * @param sqlQuery {string}
 * @param values {*[]}
 * @returns {Promise<*[]>}
 */
async function query(db, sqlQuery, values) {
    const mongoDbRequestData = convert(fillPlaceholders(sqlQuery, values))
    await findImplicitVariables(db, mongoDbRequestData)
    return db.collection(mongoDbRequestData.collectionName)
        .aggregate(mongoDbRequestData.pipeline, {
            allowDiskUse: true
        }).toArray()
}

/**
 * Convert SQL query to MongoDB Aggregation Pipeline
 * @param sqlQuery
 * @returns {{collectionName: string, pipeline: *[]}}
 */
function convert(sqlQuery) {
    const parsedSqlQuery = parse(sqlQuery)
    // console.log('SQL:', JSON.stringify(parsedSqlQuery, null, 2))
    const result = rewrite(parsedSqlQuery)
    // console.log('MongoDB:', JSON.stringify(result, null, 2))
    return result
}

function fillPlaceholders(sqlQuery, values) {
    if (values) {
        for (let i = 0; i < values.length; i++) {
            const val = values[i]
            let replaceValue
            if (typeof val === 'string') {
                replaceValue = `"${val}"`
            } else {
                replaceValue = val
            }
            sqlQuery = sqlQuery.replace(/\?/, replaceValue)
        }
    }
    return sqlQuery
}

async function findImplicitVariables(db, {collectionName, pipeline}) {
    const find = function (o, fields) {
        if (Array.isArray(o)) {
            return o.map(item => {
                if (typeof item === 'string' && fields.indexOf(item) !== -1) {
                    return `$${item}`
                }
                return find(item, fields)
            })
        } else if (typeof o === 'object') {
            if (o === null) {
                return o
            }
            return Object.keys(o).reduce((acc, key) => {
                const value = o[key]
                if (typeof value === 'string' && fields.indexOf(value) !== -1) {
                    return {...acc, [key]: `$${value}`}
                }
                return {...acc, [key]: find(o[key], fields)}
            }, {})
        }
        return o
    }

    const match = pipeline[0]
    if (match && match.hasOwnProperty("$match")) {
        const fields = await getSampleDocumentFields(db, collectionName)
        pipeline[0] = find(match, fields)
    }
}

// support only first-level fields
async function getSampleDocumentFields(db, collectionName) {
    const doc = await db.collection(collectionName).findOne()
    return doc ? Object.keys(doc) : []
}

