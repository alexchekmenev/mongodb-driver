/* globals describe, afterAll, beforeAll, test, expect, jest */
const { GenericContainer, Wait } = require("testcontainers");
const { Duration, TemporalUnit } = require("node-duration");
const MongoDbDriver = require('../driver/MongoDbDriver');

const { populate } = require('./populate')

describe('Query method with Docker', () => {
  let container = null;
  let mongoDbDriver = null;

  jest.setTimeout(200000);

  beforeAll(async () => {
    container = await new GenericContainer("mongo", 'latest')
        .withEnv("MONGO_INITDB_ROOT_USERNAME", process.env.TEST_DB_USER || "root")
        .withEnv("MONGO_INITDB_ROOT_PASSWORD", process.env.TEST_DB_PASSWORD || "rootpassword")
        .withExposedPorts(27017)
        .start();

    const config = {
      host: 'localhost',
      user: 'root',
      password: process.env.TEST_DB_PASSWORD || "rootpassword",
      port: container && container.getMappedPort(27017) || 27027,
      database: 'test'
    }

    mongoDbDriver = new MongoDbDriver(config);

    await mongoDbDriver.testConnection()
    await populate(config.database, config.port, config.user, config.password)
    // await mySqlDriver.createSchemaIfNotExists('test');
    // await mySqlDriver.query('DROP SCHEMA test');
    // await mySqlDriver.createSchemaIfNotExists('test');
  });

  afterAll(async () => {
    await mongoDbDriver.release();
    if (container) {
      await container.stop();
    }
  });

  test('get total count', async () => {
      const result = await mongoDbDriver.query(`SELECT count(*) as total FROM donors`)
      expect(result).toEqual([ { total: 2122640 } ])
  })

  test('donors count by state', async () => {
    const result = await mongoDbDriver.query(`
    SELECT \`Donor State\` \`donors__donor_state\`,
      count(*) \`donors__count\`
    FROM
      donors AS \`donors\`
    GROUP BY
      1
    ORDER BY
      2 DESC
    LIMIT
      10000`)

  })

  // test('truncated wrong value', async () => {
  //   await mongoDbDriver.uploadTable(`test.wrong_value`, [{ name: 'value', type: 'string' }], {
  //     rows: [{ value: "Tekirdağ" }]
  //   });
  //   expect(JSON.parse(JSON.stringify(await mongoDbDriver.query('select * from test.wrong_value'))))
  //     .toStrictEqual([{ value: "Tekirdağ" }]);
  //   expect(JSON.parse(JSON.stringify((await mongoDbDriver.downloadQueryResults('select * from test.wrong_value')).rows)))
  //     .toStrictEqual([{ value: "Tekirdağ" }]);
  // });
  //
  // test('boolean field', async () => {
  //   await mongoDbDriver.uploadTable(`test.boolean`, [{ name: 'b_value', type: 'boolean' }], {
  //     rows: [
  //       { b_value: true },
  //       { b_value: true },
  //       { b_value: 'true' },
  //       { b_value: false },
  //       { b_value: 'false' },
  //       { b_value: null }
  //     ]
  //   });
  //   expect(JSON.parse(JSON.stringify(await mongoDbDriver.query('select * from test.boolean where b_value = ?', [true]))))
  //     .toStrictEqual([{ b_value: 1 }, { b_value: 1 }, { b_value: 1 }]);
  //   expect(JSON.parse(JSON.stringify(await mongoDbDriver.query('select * from test.boolean where b_value = ?', [false]))))
  //     .toStrictEqual([{ b_value: 0 }, { b_value: 0 }]);
  // });
});
