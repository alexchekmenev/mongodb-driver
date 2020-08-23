const mysql = require('mysql');
const { promisify } = require('util');
const { reduce } = require('ramda');

const { MongoClient, Logger } = require('mongodb')
const BaseDriver = require('@cubejs-backend/query-orchestrator/driver/BaseDriver')
const { query: execQuery } = require('../src/index')
const MysqlQuery = require('@cubejs-backend/schema-compiler/adapter/MysqlQuery')

// Logger.setLevel("error");
//
// const sortByKeys = (unordered) => {
//     const ordered = {};
//
//     Object.keys(unordered).sort().forEach((key) => {
//         ordered[key] = unordered[key];
//     });
//
//     return ordered;
// };

class MongoDbDriver extends BaseDriver {

    static dialectClass() {
        return MysqlQuery;
    }

    constructor(config) {
        super();
        const { pool, ...restConfig } = config || {};
        this.config = {
            host: process.env.CUBEJS_DB_HOST,
            database: process.env.CUBEJS_DB_NAME,
            port: process.env.CUBEJS_DB_PORT,
            user: process.env.CUBEJS_DB_USER,
            password: process.env.CUBEJS_DB_PASS,
            ...restConfig
        };
        const url = `mongodb://${this.config.user}:${this.config.password}@${this.config.host}:${this.config.port}/${this.config.database}?authSource=admin`;
        const poolSize = process.env.CUBEJS_DB_MAX_POOL && parseInt(process.env.CUBEJS_DB_MAX_POOL, 10) || 10
        this.client = new MongoClient(url, {
            poolSize,
            useUnifiedTopology: true
        })
    }

    async query(query, values) {
        // console.log(query, values)
        await promisify(this.client.connect.bind(this.client))()
        const db = this.client.db(this.config.database)
        const result = await execQuery(db, query, values)
        // console.log(result)
        return result
    }

    async testConnection() {
        console.log('[mongodb-driver]: testConnection')
        await promisify(this.client.connect.bind(this.client))()
        const isConnected = await this.client.isConnected()
        if (!isConnected) {
            throw new Error('Client is not connected to MongoDB')
        }
    }

    async release() {
        console.log('[mongodb-driver]: release')
        return await this.client.close(true)
    }

    // tablesSchema() {
    //     const reduceCb = (result, i) => {
    //         let schema = (result[i.table_schema] || {});
    //         const tables = (schema[i.table_name] || []);
    //
    //         tables.push({ name: i.column_name, type: i.data_type, attributes: i.key_type ? ['primaryKey'] : [] });
    //
    //         tables.sort();
    //         schema[i.table_name] = tables;
    //         schema = sortByKeys(schema);
    //         result[i.table_schema] = schema;
    //
    //         return sortByKeys(result);
    //     };
    //     const data = [
    //         {
    //             "COLUMN_NAME": "Donor ID",
    //             "TABLE_NAME": "donors",
    //             "TABLE_SCHEMA": "test",
    //         },
    //         {
    //             "COLUMN_NAME": "Donor City",
    //             "TABLE_NAME": "donors",
    //             "TABLE_SCHEMA": "test",
    //         },
    //         {
    //             "COLUMN_NAME": "Donor State",
    //             "TABLE_NAME": "donors",
    //             "TABLE_SCHEMA": "test",
    //         },
    //         {
    //             "COLUMN_NAME": "Donor Is Teacher",
    //             "TABLE_NAME": "donors",
    //             "TABLE_SCHEMA": "test",
    //         },
    //         {
    //             "COLUMN_NAME": "Donor Zip",
    //             "TABLE_NAME": "donors",
    //             "TABLE_SCHEMA": "test",
    //         }
    //     ];
    //     return reduce(reduceCb, {}, data)
    // }

    quoteIdentifier(identifier) {
        return `\`${identifier}\``;
    }
}

module.exports = MongoDbDriver;
