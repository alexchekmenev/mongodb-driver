const convertTestCaseData = [
    {
        name: `simple test with filter`,
        sql: `SELECT 
                count(*) \`donors__count\` 
            FROM test.donors AS \`donors\` 
            WHERE 10 < 100 && \`donors\`."Donor City" = "San Francisco" 
            LIMIT 10000`,
        mongoDb: {
            "collectionName": "donors",
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
        }
    },
    {
        name: `simple filter surrounded by braces`,
        sql: `SELECT 
                \`Donor City\` \`donors__donor_city\`, 
                count(*) \`donors__count\` 
            FROM donors AS \`donors\` 
            WHERE (\`donors\`."Donor State" = \'Illinois\') 
            GROUP BY 1 
            ORDER BY 2 DESC 
            LIMIT 10000`,
        mongoDb: {
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
        }
    },
    {
        name: `select elements without aliases`,
        sql: `SELECT 
                count(propA), 
                Count(*) total, 
                \`donors\` \`donors__donor_state\`, 
                lol \`donors__count\`
            FROM b
            WHERE a = "blabla" OR 1 > 0 
            GROUP BY 1 ASC, state, COUNT(a)
            ORDER BY 2 ASC 
            LIMIT 10000 
            OFFSET 10`,
        mongoDb: {
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
                        "<3>": { "$first": "$donors" },
                        "<4>": { "$first": "$lol" }
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
        }
    },
    {
        name: `same select element with different aliases`,
        sql: `SELECT 
                1 as one, 
                1 as one2, 
                \`Donor City\` \`donors__donor_city\`, 
                \`Donor State\` \`donors__donor_state\`,
                 count(*) \`donors__count\`
            FROM donors AS \`donors\` 
            WHERE 10 < 100
            GROUP BY 1, donors.\`Donor City\`, 4 
            ORDER BY 1, 3 DESC 
            LIMIT 10000`,
        mongoDb: {
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
        }
    }
    // TODO test - columnName with $
    // TODO test - nested function calls in SELECT, GROUP BY
]

const queryTestCaseData = [
    {
        name: `get total count`,
        sql: `SELECT count(*) as total FROM \`test\`.donors`,
        result: [{total: 2122640}]
    },
    {
        name: `group by state, order by count`,
        sql: `SELECT \`donors\`."Donor State" \`donors__donor_state\`,
                     count(*)                 \`donors__count\`
              FROM test.donors AS \`donors\`
              GROUP BY 1
              ORDER BY 2 DESC
              LIMIT 10`,
        result: [
            {donors__donor_state: 'California', donors__count: 294695},
            {donors__donor_state: 'New York', donors__count: 137957},
            {donors__donor_state: 'Texas', donors__count: 134449},
            {donors__donor_state: 'Florida', donors__count: 108828},
            {donors__donor_state: 'other', donors__count: 107809},
            {donors__donor_state: 'Illinois', donors__count: 104381},
            {donors__donor_state: 'North Carolina', donors__count: 84250},
            {donors__donor_state: 'Pennsylvania', donors__count: 72280},
            {donors__donor_state: 'Georgia', donors__count: 63731},
            {donors__donor_state: 'Massachusetts', donors__count: 60730}
        ]
    },
    {
        name: `filter by city`,
        sql: `SELECT count(*) \`donors__count\`
              FROM test.donors AS \`donors\`
              WHERE (\`donors\`."Donor City" = "San Francisco")
              LIMIT 10000`,
        result: [{donors__count: 16925}]
    },
    {
        name: `filter by city with one ? placeholder`,
        sql: `SELECT count(*) \`donors__count\`
              FROM donors AS \`donors\`
              WHERE (\`donors\`.\`Donor City\` = ?)
              LIMIT 10000`,
        values: ["San Francisco", "Yes"],
        result: [{donors__count: 16925}]
    },
    {
        name: `filter by city with multiple ? placeholders`,
        sql: `SELECT count(*) \`donors__count\`
              FROM donors AS \`donors\`
              WHERE (\`donors\`.\`Donor City\` = ? AND \`donors\`.\`Donor Is Teacher\` = ?)
              LIMIT 10000`,
        values: ["San Francisco", "Yes"],
        result: [{donors__count: 988}]
    },
    {
        name: `top10 cities by teachers count`,
        sql: `SELECT \`Donor City\` \`donors__donor_city\`,
                     count(*)       \`donors__count\`
              FROM donors AS \`donors\`
              WHERE (\`donors\`."Donor Is Teacher" = 'Yes')
              GROUP BY 1
              ORDER BY 2 DESC
              LIMIT 10`,
        result: [
            {donors__donor_city: null, donors__count: 31544},
            {donors__donor_city: 'Chicago', donors__count: 4249},
            {donors__donor_city: 'Brooklyn', donors__count: 2275},
            {donors__donor_city: 'Houston', donors__count: 1841},
            {donors__donor_city: 'New York', donors__count: 1746},
            {donors__donor_city: 'Los Angeles', donors__count: 1614},
            {donors__donor_city: 'Philadelphia', donors__count: 1562},
            {donors__donor_city: 'Indianapolis', donors__count: 1341},
            {donors__donor_city: 'Charlotte', donors__count: 1113},
            {donors__donor_city: 'Washington', donors__count: 1006}
        ]
    },
    {
        name: `from 10th to 20th cities by teachers count`,
        sql: `SELECT \`Donor City\` \`donors__donor_city\`,
                     count(*)       \`donors__count\`
              FROM donors AS \`donors\`
              WHERE (\`donors\`."Donor Is Teacher" = 'Yes')
              GROUP BY 1
              ORDER BY 2 DESC
              LIMIT 10, 10`,
        result: [
            {donors__donor_city: 'Portland', donors__count: 1005},
            {donors__donor_city: 'San Francisco', donors__count: 988},
            {donors__donor_city: 'Miami', donors__count: 977},
            {donors__donor_city: 'Oklahoma City', donors__count: 932},
            {donors__donor_city: 'Seattle', donors__count: 925},
            {donors__donor_city: 'Atlanta', donors__count: 917},
            {donors__donor_city: 'Las Vegas', donors__count: 914},
            {donors__donor_city: 'Phoenix', donors__count: 910},
            {donors__donor_city: 'Oakland', donors__count: 892},
            {donors__donor_city: 'Dallas', donors__count: 878}
        ]
    },
    {
        name: `implicit field, filter by city`,
        sql: `SELECT count(*) \`donors__count\`
              FROM donors AS \`donors\`
              WHERE (\`Donor City\` = ?)
              LIMIT 10000`,
        values: ["San Francisco"],
        result: [{donors__count: 16925}]
    },
    {
        name: `implicit field, filter by is teacher`,
        sql: `SELECT \`Donor State\` \`donors__donor_state\`,
                     count(*)        \`donors__count\`
              FROM donors AS \`donors\`
              WHERE (donors.\`Donor Is Teacher\` = ?)
              GROUP BY 1
              ORDER BY 2 DESC
              LIMIT 10`,
        values: ["Yes"],
        result: [
            { donors__donor_state: 'other', donors__count: 28124 },
            { donors__donor_state: 'California', donors__count: 25329 },
            { donors__donor_state: 'Texas', donors__count: 13540 },
            { donors__donor_state: 'New York', donors__count: 11744 },
            { donors__donor_state: 'Florida', donors__count: 10547 },
            { donors__donor_state: 'Illinois', donors__count: 9499 },
            { donors__donor_state: 'North Carolina', donors__count: 8704 },
            { donors__donor_state: 'Georgia', donors__count: 6270 },
            { donors__donor_state: 'South Carolina', donors__count: 5798 },
            { donors__donor_state: 'Pennsylvania', donors__count: 5595 }
        ]
    },
    {
        name: `implicit field, filter by is teacher & state`,
        sql: `SELECT \`Donor City\` \`donors__donor_city\`,
                     count(*)       \`donors__count\`
              FROM donors AS \`donors\`
              WHERE (donors.\`Donor Is Teacher\` = ?)
                AND (donors.\`Donor State\` = ?) AND \`Donor City\` IS NOT NULL
              GROUP BY 1
              ORDER BY 2 DESC, donors__donor_city ASC
              LIMIT 8`,
        values: ["Yes", "Maryland"],
        result: [
            { donors__donor_city: 'Baltimore', donors__count: 758 },
            { donors__donor_city: 'Silver Spring', donors__count: 145 },
            { donors__donor_city: 'Frederick', donors__count: 83 },
            { donors__donor_city: 'Bowie', donors__count: 72 },
            { donors__donor_city: 'Laurel', donors__count: 69 },
            { donors__donor_city: 'Columbia', donors__count: 67 },
            { donors__donor_city: 'Hyattsville', donors__count: 65 },
            { donors__donor_city: 'Gaithersburg', donors__count: 55 }
        ],
    },
    {
        name: `city and is_teacher with fixed zip code`,
        sql: `SELECT \`Donor City\`       \`donors__donor_city\`,
                     \`Donor Is Teacher\` \`donors__donor_is_teacher\`,
                     count(*)             \`donors__count\`
              FROM donors AS \`donors\`
              WHERE (\`donors\`."Donor Zip" = '941')
              GROUP BY 1,
                       2
              ORDER BY 3 DESC
              LIMIT 10000`,
        result: [
            {
                donors__donor_city: 'San Francisco',
                donors__donor_is_teacher: 'No',
                donors__count: 15937
            },
            {
                donors__donor_city: 'San Francisco',
                donors__donor_is_teacher: 'Yes',
                donors__count: 988
            },
            {
                donors__donor_city: null,
                donors__donor_is_teacher: 'No',
                donors__count: 170
            },
            {
                donors__donor_city: null,
                donors__donor_is_teacher: 'Yes',
                donors__count: 3
            }
        ]
    },
    {
        name: `multiple filters, multiple implicit fields`,
        sql: `SELECT \`Donor City\`       \`donors__donor_city\`,
                     \`Donor State\`      \`donors__donor_state\`,
                     \`Donor Is Teacher\` \`donors__donor_is_teacher\`,
                     \`Donor Zip\`        \`donors__donor_zip\`,
                     count(*)             \`donors__count\`
              FROM donors AS \`donors\`
              WHERE (\`Donor Is Teacher\` = ?)
                AND (\`Donor State\` = ?)
                AND (
                      \`Donor City\` <> ?
                      OR \`Donor City\` IS NULL
                  )
                AND (
                      \`Donor City\` <> ?
                      OR \`Donor City\` IS NULL
                  )
                AND (\`Donor Zip\` = ?)
              GROUP BY 1,
                       2,
                       3,
                       4
              ORDER BY 5 DESC
              LIMIT 10000`,
        values: ["Yes", "Maryland", "Laurel", "Silver Spring", "941"],
        result: [
            {
                donors__donor_city: 'San Francisco',
                donors__donor_state: 'Maryland',
                donors__donor_is_teacher: 'Yes',
                donors__donor_zip: '941',
                donors__count: 1
            }
        ]
    }
]

module.exports = {
    convertTestCaseData,
    queryTestCaseData
}


