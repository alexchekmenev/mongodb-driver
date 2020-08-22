const { parse } = require('./QueryParser')
const { rewrite } = require('./QueryRewriter')

module.exports = { query }

/**
 *
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
 *
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

const input = 'SELECT count(propA), Count(*) total, `donors` `donors__donor_state`, lol `donors__count` ' +
    'FROM b, test.donors AS `donors`, a WHERE a = "blabla" OR 1 > 0 GROUP BY 1 ASC, state, COUNT(a) ' +
    'ORDER BY 2 ASC LIMIT 10000 OFFSET 10;'
convert(input)

const input1 = 'SELECT\n' +
    '  count(*) `donors__count` FROM\n' +
    '  test.donors AS `donors` WHERE\n' +
    '  10 < 100 && `donors`."Donor City" = "San Francisco" LIMIT 10000'
convert(input1)

const real =
    '    SELECT\n' +
    '      1 as one, 1 as one2, `Donor City` `donors__donor_city`, `Donor State` `donors__donor_state`, count(*) `donors__count`\n' +
    '    FROM\n' +
    '       donors AS `donors` WHERE 10 < 100\n' +
    '  GROUP BY 1, donors.`Donor City`, 4 ORDER BY 1, 3 DESC LIMIT 10000 []'
convert(real)

const withSegment = 'SELECT\n' +
    '      `Donor City` `donors__donor_city`, count(*) `donors__count`\n' +
    '    FROM\n' +
    '      donors AS `donors`\n' +
    '  WHERE (`donors`."Donor State" = \'Illinois\') GROUP BY 1 ORDER BY 2 DESC LIMIT 10000'
convert(withSegment)

// convert('select count(*) as tot from donors')

