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


// const dbName = 'cube-js';
// const user = encodeURIComponent('root');
// const password = encodeURIComponent('rootpassword');
// const authMechanism = 'DEFAULT';
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

    const q = await db.collection(mongoDbPipeline.collectionName)
        .aggregate(mongoDbPipeline.pipeline, {
            allowDiskUse: true
        }).toArray()
    console.log(q)
}

module.exports = query

// main('SELECT Count(*) as total FROM donors where "Donor Zip" = "245"')