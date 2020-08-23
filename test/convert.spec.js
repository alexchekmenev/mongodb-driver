/* globals describe, afterAll, beforeAll, test, xtest, expect, jest */
const { convert } = require('../src/index')
const { convertTestCaseData } = require('./testCases')

describe('Convert SQL to MongoDB', () => {
    for (const testCase of convertTestCaseData) {
        test(testCase.name, () => {
            expect(convert(testCase.sql)).toEqual(testCase.mongoDb)
        })
    }
})
