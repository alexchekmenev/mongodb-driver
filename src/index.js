const { parse } = require('./QueryParser')
const { rewrite } = require('./QueryRewriter')

module.exports = { query, convert }

/**
 * Execute SQL query using MongoDB
 * @param db
 * @param sqlQuery {string}
 * @returns {Promise<*[]>}
 */
async function query(db, sqlQuery) {
    const result = convert(sqlQuery)
    return db.collection(result.collectionName)
        .aggregate(result.pipeline, {
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
    console.log('SQL:', JSON.stringify(parsedSqlQuery, null, 2))
    const result = rewrite(parsedSqlQuery)
    console.log('MongoDB:', JSON.stringify(result, null, 2))
    return result
}

