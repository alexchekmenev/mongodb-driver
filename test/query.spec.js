/* globals describe, afterAll, beforeAll, test, xtest, expect, jest */
const MongoDbDriver = require('../driver/MongoDbDriver');
const { queryTestCaseData } = require('./testCases')

describe('Query method', () => {
    let mongoDbDriver = null;

    jest.setTimeout(60000);

    beforeAll(async () => {
        const config = {
            host: 'localhost',
            user: 'root',
            password: "rootpassword",
            port: 27017,
            database: 'test'
        }

        mongoDbDriver = new MongoDbDriver(config);
    });

    afterAll(async () => {
        await mongoDbDriver.release();
    });

    for (const testCase of queryTestCaseData) {
        test(testCase.name, async () => {
            const result = await mongoDbDriver.query(testCase.sql, testCase.values || [])
            expect(result).toEqual(testCase.result)
        })
    }
});
