const QueryParser = require('../src/QueryParser')

const input = 'SELECT count(propA) a, Count(*) total, `donors` `donors__donor_state`, lol `donors__count` ' +
    'FROM b, test.donors AS `donors`, a WHERE a = "blabla" OR 1 > 0 AND NOT 1 < 2 OR 10 GROUP BY 1 ASC, state ' +
    'ORDER BY 2 ASC LIMIT 10000 OFFSET 10;'

const input1 = 'SELECT\n' +
    '  count(*) `donors__count` FROM\n' +
    '  test.donors AS `donors` WHERE\n' +
    '  `donors`."Donor City" = "San Francisco"\n' +
    'LIMIT\n' +
    '  10000'

const parser = new QueryParser()
const parsedSqlQuery = parser.parse(input1)

console.log(JSON.stringify(parsedSqlQuery))
