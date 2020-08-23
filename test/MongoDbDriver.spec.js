/* globals describe, afterAll, beforeAll, test, xtest, expect, jest */
const { convert } = require('../src/index')

describe('', () => {

    test('simple test with filter', () => {
        const input1 = `
            SELECT 
                count(*) \`donors__count\` 
            FROM test.donors AS \`donors\` 
            WHERE 10 < 100 && \`donors\`."Donor City" = "San Francisco" 
            LIMIT 10000`
        const result = convert(input1)
        expect(result).toEqual({
            "collectionName": "test_donors",
            "pipeline": [
                {
                    "$match": {
                        "$expr": {
                            "$and": [
                                {
                                    "$lt": [
                                        10,
                                        100
                                    ]
                                },
                                {
                                    "$eq": [
                                        "$Donor City",
                                        "San Francisco"
                                    ]
                                }
                            ]
                        }
                    }
                },
                {
                    "$group": {
                        "_id": null,
                        "<1>": {
                            "$sum": 1
                        }
                    }
                },
                {
                    "$project": {
                        "_id": 0,
                        "donors__count": "$<1>"
                    }
                },
                {
                    "$limit": 10000
                }
            ]
        })
    })

    test('simple filter surrounded by braces', () => {
        const withSegment = `
            SELECT 
                \`Donor City\` \`donors__donor_city\`, 
                count(*) \`donors__count\` 
            FROM donors AS \`donors\` 
            WHERE (\`donors\`."Donor State" = \'Illinois\') 
            GROUP BY 1 
            ORDER BY 2 DESC 
            LIMIT 10000`
        const result = convert(withSegment)
        expect(result).toEqual({
            "collectionName": "donors",
            "pipeline": [
                {
                    "$match": {
                        "$expr": {
                            "$eq": [
                                "$Donor State",
                                "Illinois"
                            ]
                        }
                    }
                },
                {
                    "$group": {
                        "_id": {
                            "<1>": "$Donor City"
                        },
                        "<2>": {
                            "$sum": 1
                        }
                    }
                },
                {
                    "$project": {
                        "_id": 0,
                        "donors__donor_city": "$_id.<1>",
                        "donors__count": "$<2>"
                    }
                },
                {
                    "$sort": {
                        "donors__count": -1
                    }
                },
                {
                    "$limit": 10000
                }
            ]
        })
    })

    test('select elements without aliases', () => {
        const input = `
            SELECT 
                count(propA), 
                Count(*) total, 
                \`donors\` \`donors__donor_state\`, 
                lol \`donors__count\`
            FROM b
            WHERE a = "blabla" OR 1 > 0 
            GROUP BY 1 ASC, state, COUNT(a)
            ORDER BY 2 ASC 
            LIMIT 10000 
            OFFSET 10`
        const result = convert(input)
        expect(result).toEqual({
            "collectionName": "b",
            "pipeline": [
                {
                    "$match": {
                        "$expr": {
                            "$or": [
                                {
                                    "$eq": [
                                        "$a",
                                        "blabla"
                                    ]
                                },
                                {
                                    "$gt": [
                                        1,
                                        0
                                    ]
                                }
                            ]
                        }
                    }
                },
                {
                    "$group": {
                        "_id": {
                            "<1>": {
                                "$sum": "$propA"
                            },
                            "<5>": "$state",
                            "<6>": {
                                "$sum": "$a"
                            }
                        },
                        "<2>": {
                            "$sum": 1
                        },
                        "<3>": "$donors",
                        "<4>": "$lol"
                    }
                },
                {
                    "$project": {
                        "_id": 0,
                        "{\"$sum\":\"$propA\"}": "$_id.<1>",
                        "total": "$<2>",
                        "donors__donor_state": "$<3>",
                        "donors__count": "$<4>"
                    }
                },
                {
                    "$sort": {
                        "total": 1
                    }
                },
                {
                    "$skip": 10
                },
                {
                    "$limit": 10000
                }
            ]
        })
    })

    test('same select element with different aliases', () => {
        const real = `
            SELECT 
                1 as one, 
                1 as one2, 
                \`Donor City\` \`donors__donor_city\`, 
                \`Donor State\` \`donors__donor_state\`,
                 count(*) \`donors__count\`
            FROM donors AS \`donors\` 
            WHERE 10 < 100
            GROUP BY 1, donors.\`Donor City\`, 4 
            ORDER BY 1, 3 DESC 
            LIMIT 10000`
        const result = convert(real)
        expect(result).toEqual( {
            "collectionName": "donors",
            "pipeline": [
                {
                    "$match": {
                        "$expr": {
                            "$lt": [
                                10,
                                100
                            ]
                        }
                    }
                },
                {
                    "$group": {
                        "_id": {
                            "<1>": 1,
                            "<2>": "$Donor City",
                            "<3>": "$Donor State"
                        },
                        "<4>": {
                            "$sum": 1
                        }
                    }
                },
                {
                    "$project": {
                        "_id": 0,
                        "one": "$_id.<1>",
                        "one2": "$_id.<1>",
                        "donors__donor_city": "$_id.<2>",
                        "donors__donor_state": "$_id.<3>",
                        "donors__count": "$<4>"
                    }
                },
                {
                    "$sort": {
                        "one2": 1,
                        "donors__donor_city": -1
                    }
                },
                {
                    "$limit": 10000
                }
            ]
        })
    })

    test('total count with alias', () => {
        const input = 'select count(*) as tot from donors'
        convert(input)
    })

    // TODO test - columnName with $

    // TODO test - nested function calls in SELECT, GROUP BY
})
