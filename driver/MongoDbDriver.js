const mysql = require('mysql');
const genericPool = require('generic-pool');
const { promisify } = require('util');
const crypto = require('crypto');

const MongoClient = require('mongodb').MongoClient;
const BaseDriver = require('@cubejs-backend/query-orchestrator/driver/BaseDriver');
const execQuery = require('../src/index')
const MysqlQuery = require('@cubejs-backend/schema-compiler/adapter/MysqlQuery');

// const GenericTypeToMySql = {
//     string: 'varchar(255) CHARACTER SET utf8mb4',
//     text: 'varchar(255) CHARACTER SET utf8mb4'
// };

async function connect(client) {
    return new Promise((resolve, reject) => {
        client.connect(function(err) {
            if (err) {
                return reject(err)
            }
            resolve()
        });
    })
}

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
        const poolSize = process.env.CUBEJS_DB_MAX_POOL && parseInt(process.env.CUBEJS_DB_MAX_POOL, 10) || 5
        this.client = new MongoClient(url)
    }

    async testConnection() {
        console.log('[mongodb-driver]: testConnection')
        await connect(this.client)
    }

    async query(query, values) {
        console.log('[mongodb-driver]: query', query, values)
        await connect(this.client)
        const db = this.client.db(this.config.database)
        return execQuery(db, query) // do not support prepared statements
    }

    async release() {
        console.log('[mongodb-driver]: release')
        await this.client.close();
    }

    tablesSchema() {
        return [] // FIXME use sampling
    }

    quoteIdentifier(identifier) {
        console.log('ID', identifier)
        return `\`${identifier}\``;
    }

    // withConnection(fn) {
    //     const self = this;
    //     const connectionPromise = this.pool.acquire();
    //
    //     let cancelled = false;
    //     const cancelObj = {};
    //     const promise = connectionPromise.then(async conn => {
    //         const [{ connectionId }] = await conn.execute('select connection_id() as connectionId');
    //         cancelObj.cancel = async () => {
    //             cancelled = true;
    //             await self.withConnection(async processConnection => {
    //                 await processConnection.execute(`KILL ${connectionId}`);
    //             });
    //         };
    //         return fn(conn)
    //             .then(res => this.pool.release(conn).then(() => {
    //                 if (cancelled) {
    //                     throw new Error('Query cancelled');
    //                 }
    //                 return res;
    //             }))
    //             .catch((err) => this.pool.release(conn).then(() => {
    //                 if (cancelled) {
    //                     throw new Error('Query cancelled');
    //                 }
    //                 throw err;
    //             }));
    //     });
    //     promise.cancel = () => cancelObj.cancel();
    //     return promise;
    // }
    //
    // setTimeZone(db) {
    //     return db.execute(`SET time_zone = '${this.config.storeTimezone || '+00:00'}'`, []);
    // }
    //
    // informationSchemaQuery() {
    //     return `${super.informationSchemaQuery()} AND columns.table_schema = '${this.config.database}'`;
    // }
    //
    // quoteIdentifier(identifier) {
    //     return `\`${identifier}\``;
    // }
    //
    // fromGenericType(columnType) {
    //     return GenericTypeToMySql[columnType] || super.fromGenericType(columnType);
    // }
    //
    // loadPreAggregationIntoTable(preAggregationTableName, loadSql, params, tx) {
    //     if (this.config.loadPreAggregationWithoutMetaLock) {
    //         return this.cancelCombinator(async saveCancelFn => {
    //             await saveCancelFn(this.query(`${loadSql} LIMIT 0`, params));
    //             await saveCancelFn(this.query(loadSql.replace(/^CREATE TABLE (\S+) AS/i, 'INSERT INTO $1'), params));
    //         });
    //     }
    //     return super.loadPreAggregationIntoTable(preAggregationTableName, loadSql, params, tx);
    // }
    //
    // async downloadQueryResults(query, values) {
    //     if (!this.config.database) {
    //         throw new Error(`Default database should be defined to be used for temporary tables during query results downloads`);
    //     }
    //     const tableName = crypto.randomBytes(10).toString('hex');
    //     const columns = await this.withConnection(async db => {
    //         await this.setTimeZone(db);
    //         await db.execute(`CREATE TEMPORARY TABLE \`${this.config.database}\`.t_${tableName} AS ${query} LIMIT 0`, values);
    //         const result = await db.execute(`DESCRIBE \`${this.config.database}\`.t_${tableName}`);
    //         await db.execute(`DROP TEMPORARY TABLE \`${this.config.database}\`.t_${tableName}`);
    //         return result;
    //     });
    //
    //     const types = columns.map(c => ({ name: c.Field, type: this.toGenericType(c.Type) }));
    //
    //     return {
    //         rows: await this.query(query, values),
    //         types,
    //     };
    // }
    //
    // toColumnValue(value, genericType) {
    //     if (genericType === 'timestamp' && typeof value === 'string') {
    //         return value && value.replace('Z', '');
    //     }
    //     if (genericType === 'boolean' && typeof value === 'string') {
    //         if (value.toLowerCase() === 'true') {
    //             return true;
    //         }
    //         if (value.toLowerCase() === 'false') {
    //             return false;
    //         }
    //     }
    //     return super.toColumnValue(value, genericType);
    // }
    //
    // async uploadTable(table, columns, tableData) {
    //     if (!tableData.rows) {
    //         throw new Error(`${this.constructor} driver supports only rows upload`);
    //     }
    //     await this.createTable(table, columns);
    //     try {
    //         const batchSize = 1000; // TODO make dynamic?
    //         for (let j = 0; j < Math.ceil(tableData.rows.length / batchSize); j++) {
    //             const currentBatchSize = Math.min(tableData.rows.length - j * batchSize, batchSize);
    //             const indexArray = Array.from({ length: currentBatchSize }, (v, i) => i);
    //             const valueParamPlaceholders =
    //                 indexArray.map(i => `(${columns.map((c, paramIndex) => this.param(paramIndex + i * columns.length)).join(', ')})`).join(', ');
    //             const params = indexArray.map(i => columns
    //                 .map(c => this.toColumnValue(tableData.rows[i + j * batchSize][c.name], c.type)))
    //                 .reduce((a, b) => a.concat(b), []);
    //
    //             await this.query(
    //                 `INSERT INTO ${table}
    //     (${columns.map(c => this.quoteIdentifier(c.name)).join(', ')})
    //     VALUES ${valueParamPlaceholders}`,
    //                 params
    //             );
    //         }
    //     } catch (e) {
    //         await this.dropTable(table);
    //         throw e;
    //     }
    // }
}

module.exports = MongoDbDriver;
