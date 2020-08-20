const fs = require('fs');
const parse = require('csv-parse');
const MongoClient = require('mongodb').MongoClient;

const dbName = 'cube-js';
const user = encodeURIComponent('root');
const password = encodeURIComponent('rootpassword');
const authMechanism = 'DEFAULT';
const url = `mongodb://${user}:${password}@localhost:27017/?authMechanism=${authMechanism}`;

const csvData=[];
fs.createReadStream('./Donors.csv')
    .pipe(parse({delimiter: ','}))
    .on('data', function(csvrow) {
        csvData.push(csvrow);
    })
    .on('end',async function() {
        const client = await connect()
        await insertRows(client, csvData)
        client.close()
    });

async function connect() {
    return new Promise((resolve, reject) => {
        const client = new MongoClient(url);
        client.connect(function(err) {
            if (err) {
                return reject(err)
            }
            console.log("Connected successfully to server");
            resolve(client)
        });
    })
}

async function insertRows(client, data) {
    const db = client.db(dbName)
    const collection = db.collection('donors')
    for (let i = 1; i < data.length; i += 100_000) {
        const docs = data.slice(i, Math.min(i + 100_000, data.length)).map(row => {
            return data[0].reduce((acc, field, index) => {
                return {...acc, [field]: row[index]}
            }, {})
        })
        await collection.insertMany(docs)
    }
}
