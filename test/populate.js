const fs = require('fs');
const parse = require('csv-parse');
const { MongoClient } = require('mongodb');
const { promisify } = require('util');

module.exports = { populate }

const DOCUMENTS_IN_PART = 1e5

async function populate(dbName, port, user, password) {
    const authMechanism = 'DEFAULT';
    const url = `mongodb://${encodeURIComponent(user)}:${encodeURIComponent(password)}@localhost:${port}/?authMechanism=${authMechanism}`;
    const client = new MongoClient(url, { useUnifiedTopology: true });
    await promisify(client.connect.bind(client))()

    try {

        const csvRows = [];
        console.log('parse...')
        await new Promise((resolve, reject) => {
            fs.createReadStream('./data/Donors.csv')
                .pipe(parse({delimiter: ','}))
                .on('data', async function (csvRow) {
                    // if (csvRows.length > 1000) return
                    csvRows.push(csvRow);
                })
                .on('end', async function () {
                    resolve(csvRows)
                })
                .on('error', function (e) {
                    reject(e)
                })
        })

        console.log('insert...')
        for (let i = 1; i < csvRows.length; i += DOCUMENTS_IN_PART) {
            await insertRows(client.db(dbName), csvRows.slice(i, Math.min(csvRows.length, i + DOCUMENTS_IN_PART)))
        }

        console.log('create indexes...')
        const collection = client.db(dbName).collection('donors')
        await collection.createIndexes([
            { key: {"Donor City": 1}, name: "_city"},
            { key: {"Donor Is Teacher": 1}, name: "_teacher"},
            { key: {"Donor State": 1}, name: "_state"},
            { key: {"Donor Zip": 1}, name: "_zip"}
        ])

    } catch (e) {
        console.error(e)
    } finally {
        await client.close()
    }
}

function rowToDocument(row) {
    // Donor ID,Donor City,Donor State,Donor Is Teacher,Donor Zip
    return {
        "Donor ID": row[0],
        "Donor City": row[1] || null,
        "Donor State": row[2] || null,
        "Donor Is Teacher": row[3] || null,
        "Donor Zip": row[4] || null
    }
}

async function insertRows(db, data) {
    const collection = db.collection('donors')
    const count = await db.collection('donors').estimatedDocumentCount()
    console.log('inserted count', count)
    const docs = data.map(row => rowToDocument(row))
    await collection.insertMany(docs)
}
