const QueryParser = require('../src/QueryParser')
const QueryRewriter = require('../src/QueryRewriter')

const input = 'SELECT count(propA) a, Count(*) total, `donors` `donors__donor_state`, lol `donors__count` ' +
    'FROM b, test.donors AS `donors`, a WHERE a = "blabla" OR 1 > 0 GROUP BY 1 ASC, state, COUNT(a) ' +
    'ORDER BY 2 ASC LIMIT 10000 OFFSET 10;'

const input1 = 'SELECT\n' +
    '  count(*) `donors__count` FROM\n' +
    '  test.donors AS `donors` WHERE\n' +
    '  10 < 100 && `donors`."Donor City" = "San Francisco" LIMIT 10000'

const parser = new QueryParser()
const parsedSqlQuery = parser.parse(input)
console.log('SQL query', JSON.stringify(parsedSqlQuery, null, 2))

const rewriter = new QueryRewriter()
const mongoDbPipeline = rewriter.rewrite(parsedSqlQuery)
console.log('MongoDB', JSON.stringify(mongoDbPipeline, null, 2))
