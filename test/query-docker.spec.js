/* globals describe, afterAll, beforeAll, test, expect, jest */
const { GenericContainer } = require("testcontainers");
const MongoDbDriver = require('../driver/MongoDbDriver');

const { populate } = require('./populate')
const { queryTestCaseData } = require('./testCases')

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
  });

  afterAll(async () => {
    await mongoDbDriver.release();
    if (container) {
      await container.stop();
    }
  });

  for (const testCase of queryTestCaseData) {
    test(testCase.name, async () => {
      const result = await mongoDbDriver.query(testCase.sql, testCase.values || [])
      expect(result).toEqual(testCase.result)
    })
  }

});
