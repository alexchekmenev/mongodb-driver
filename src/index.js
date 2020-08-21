const QueryParser = require('./QueryParser')
const QueryRewriter = require('./QueryRewriter')
// const MongoClient = require('mongodb').MongoClient;

const input = 'SELECT count(propA) a, Count(*) total, `donors` `donors__donor_state`, lol `donors__count` ' +
    'FROM b, test.donors AS `donors`, a WHERE a = "blabla" OR 1 > 0 GROUP BY 1 ASC, state, COUNT(a) ' +
    'ORDER BY 2 ASC LIMIT 10000 OFFSET 10;'

const input1 = 'SELECT\n' +
    '  count(*) `donors__count` FROM\n' +
    '  test.donors AS `donors` WHERE\n' +
    '  10 < 100 && `donors`."Donor City" = "San Francisco" LIMIT 10000'

const real =
    '    SELECT\n' +
    '      1 as one, 1 as one2, `Donor City` `donors__donor_city`, `Donor State` `donors__donor_state`, count(*) `donors__count`\n' +
    '    FROM\n' +
    '       donors AS `donors` WHERE 10 < 100\n' +
    '  GROUP BY 1, donors.`Donor City`, 4 ORDER BY 1, 3 DESC LIMIT 10000 []'

// TODO GROUP BY `colunmName`. now it's parsed as constant string
// TODO ORDER BY `colunmName` and alias (uid). now it's parsed as constant string


// const dbName = 'cube-js';
// const user = encodeURIComponent('root');
// const password = encodeURIComponent('rootpassword');
// const authMec    hanism = 'DEFAULT';
// const url = `mongodb://${user}:${password}@localhost:27017/?authMechanism=${authMechanism}`;

// async function connect() {
//     return new Promise((resolve, reject) => {
//         const client = new MongoClient(url);
//         client.connect(function(err) {
//             if (err) {
//                 return reject(err)
//             }
//             console.log("Connected successfully to server");
//             resolve(client)
//         });
//     })
// }

async function query(db, input) {
    const parser = new QueryParser()
    const parsedSqlQuery = parser.parse(input)
    console.log('SQL query', JSON.stringify(parsedSqlQuery, null, 2))

    const rewriter = new QueryRewriter()
    const mongoDbPipeline = rewriter.rewrite(parsedSqlQuery)
    console.log('MongoDB', JSON.stringify(mongoDbPipeline, null, 2))

    return db.collection(mongoDbPipeline.collectionName)
        .aggregate(mongoDbPipeline.pipeline, {
            allowDiskUse: true
        }).toArray()
    // console.log('Result: ', JSON.stringify(result, null, 2))
    // return result
}

async function test(input) {
    const parser = new QueryParser()
    const parsedSqlQuery = parser.parse(input)
    console.log('SQL query', JSON.stringify(parsedSqlQuery, null, 2))

    const rewriter = new QueryRewriter()
    const mongoDbPipeline = rewriter.rewrite(parsedSqlQuery)
    console.log('MongoDB', JSON.stringify(mongoDbPipeline, null, 2))
}

test(real)

module.exports = query


