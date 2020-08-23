const { promisify } = require('util');
const { MongoClient } = require('mongodb')
const BaseDriver = require('@cubejs-backend/query-orchestrator/driver/BaseDriver')
const { query: execQuery } = require('../src/index')
const MysqlQuery = require('@cubejs-backend/schema-compiler/adapter/MysqlQuery')

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
        await promisify(this.client.connect.bind(this.client))()
        const db = this.client.db(this.config.database)
        return execQuery(db, query, values)
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

    quoteIdentifier(identifier) {
        return `\`${identifier}\``;
    }
}

module.exports = MongoDbDriver;
