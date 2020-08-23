/* globals describe, afterAll, beforeAll, test, xtest, expect, jest */
const MongoDbDriver = require('../driver/MongoDbDriver');

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

    // await mongoDbDriver.testConnection()
  });

  afterAll(async () => {
    await mongoDbDriver.release();
  });

  test('get total count', async () => {
      const result = await mongoDbDriver.query(`SELECT count(*) as total FROM \`test\`.donors`)
      expect(result).toEqual([ { total: 2122640 } ])
  })

  test('group by state, order by count', async () => {
    const result = await mongoDbDriver.query(`SELECT \`donors\`."Donor State" \`donors__donor_state\`,
                                                     count(*)                 \`donors__count\`
                                              FROM test.donors AS \`donors\`
                                              GROUP BY 1
                                              ORDER BY 2 DESC
                                              LIMIT 10000`)
    expect(result).toEqual([
      { donors__donor_state: 'California', donors__count: 294695 },
      { donors__donor_state: 'New York', donors__count: 137957 },
      { donors__donor_state: 'Texas', donors__count: 134449 },
      { donors__donor_state: 'Florida', donors__count: 108828 },
      { donors__donor_state: 'other', donors__count: 107809 },
      { donors__donor_state: 'Illinois', donors__count: 104381 },
      { donors__donor_state: 'North Carolina', donors__count: 84250 },
      { donors__donor_state: 'Pennsylvania', donors__count: 72280 },
      { donors__donor_state: 'Georgia', donors__count: 63731 },
      { donors__donor_state: 'Massachusetts', donors__count: 60730 },
      { donors__donor_state: 'Michigan', donors__count: 60435 },
      { donors__donor_state: 'New Jersey', donors__count: 54266 },
      { donors__donor_state: 'Virginia', donors__count: 53022 },
      { donors__donor_state: 'Ohio', donors__count: 52571 },
      { donors__donor_state: 'Washington', donors__count: 47963 },
      { donors__donor_state: 'South Carolina', donors__count: 47043 },
      { donors__donor_state: 'Indiana', donors__count: 43237 },
      { donors__donor_state: 'Arizona', donors__count: 41529 },
      { donors__donor_state: 'Maryland', donors__count: 36375 },
      { donors__donor_state: 'Missouri', donors__count: 35820 },
      { donors__donor_state: 'Wisconsin', donors__count: 33217 },
      { donors__donor_state: 'Colorado', donors__count: 32704 },
      { donors__donor_state: 'Connecticut', donors__count: 31604 },
      { donors__donor_state: 'Minnesota', donors__count: 31183 },
      { donors__donor_state: 'Tennessee', donors__count: 30604 },
      { donors__donor_state: 'Oklahoma', donors__count: 30133 },
      { donors__donor_state: 'Oregon', donors__count: 29743 },
      { donors__donor_state: 'Louisiana', donors__count: 24519 },
      { donors__donor_state: 'Alabama', donors__count: 23312 },
      { donors__donor_state: 'Utah', donors__count: 21589 },
      { donors__donor_state: 'Kentucky', donors__count: 18929 },
      { donors__donor_state: 'Nevada', donors__count: 16014 },
      { donors__donor_state: 'Kansas', donors__count: 13837 },
      { donors__donor_state: 'Iowa', donors__count: 13238 },
      { donors__donor_state: 'Arkansas', donors__count: 12867 },
      { donors__donor_state: 'Mississippi', donors__count: 11997 },
      { donors__donor_state: 'Maine', donors__count: 11486 },
      { donors__donor_state: 'District of Columbia', donors__count: 10862 },
      { donors__donor_state: 'New Hampshire', donors__count: 10259 },
      { donors__donor_state: 'Idaho', donors__count: 8330 },
      { donors__donor_state: 'Hawaii', donors__count: 7967 },
      { donors__donor_state: 'Rhode Island', donors__count: 7610 },
      { donors__donor_state: 'New Mexico', donors__count: 7576 },
      { donors__donor_state: 'West Virginia', donors__count: 7497 },
      { donors__donor_state: 'Nebraska', donors__count: 6272 },
      { donors__donor_state: 'Delaware', donors__count: 5906 },
      { donors__donor_state: 'Montana', donors__count: 5088 },
      { donors__donor_state: 'Alaska', donors__count: 4519 },
      { donors__donor_state: 'South Dakota', donors__count: 4084 },
      { donors__donor_state: 'Vermont', donors__count: 3677 },
      { donors__donor_state: 'North Dakota', donors__count: 3012 },
      { donors__donor_state: 'Wyoming', donors__count: 1634 }
    ])
  })

  test('filter by city', async () => {
    const result = await mongoDbDriver.query(`SELECT count(*) \`donors__count\`
                                              FROM test.donors AS \`donors\`
                                              WHERE (\`donors\`."Donor City" = "San Francisco")
                                              LIMIT 10000`)
    expect(result).toEqual( [ { donors__count: 16925 } ])
  })

  test('filter by city with one ? placeholder', async () => {
    const result = await mongoDbDriver.query(`SELECT count(*) \`donors__count\`
                                              FROM donors AS \`donors\`
                                              WHERE (\`donors\`.\`Donor City\` = ?)
                                              LIMIT 10000`, ["San Francisco", "Yes"])
    expect(result).toEqual( [ { donors__count: 16925 } ])
  })

  test('filter by city with multiple ? placeholders', async () => {
    const result = await mongoDbDriver.query(`SELECT count(*) \`donors__count\`
                                              FROM donors AS \`donors\`
                                              WHERE (\`donors\`.\`Donor City\` = ? AND \`donors\`.\`Donor Is Teacher\` = ?)
                                              LIMIT 10000`, ["San Francisco", "Yes"])
    expect(result).toEqual( [ { donors__count: 988 } ])
  })

  test('top10 cities by teachers count', async () => {
    const result = await mongoDbDriver.query(`SELECT \`Donor City\` \`donors__donor_city\`,
                                                     count(*)       \`donors__count\`
                                              FROM donors AS \`donors\`
                                              WHERE (\`donors\`."Donor Is Teacher" = 'Yes')
                                              GROUP BY 1
                                              ORDER BY 2 DESC
                                              LIMIT 10`)
    expect(result).toEqual( [
      { donors__donor_city: null, donors__count: 31544 },
      { donors__donor_city: 'Chicago', donors__count: 4249 },
      { donors__donor_city: 'Brooklyn', donors__count: 2275 },
      { donors__donor_city: 'Houston', donors__count: 1841 },
      { donors__donor_city: 'New York', donors__count: 1746 },
      { donors__donor_city: 'Los Angeles', donors__count: 1614 },
      { donors__donor_city: 'Philadelphia', donors__count: 1562 },
      { donors__donor_city: 'Indianapolis', donors__count: 1341 },
      { donors__donor_city: 'Charlotte', donors__count: 1113 },
      { donors__donor_city: 'Washington', donors__count: 1006 }
    ])
  })

  test('from 10th to 20th cities by teachers count', async () => {
    const result = await mongoDbDriver.query(`SELECT \`Donor City\` \`donors__donor_city\`,
                                                     count(*)       \`donors__count\`
                                              FROM donors AS \`donors\`
                                              WHERE (\`donors\`."Donor Is Teacher" = 'Yes')
                                              GROUP BY 1
                                              ORDER BY 2 DESC
                                              LIMIT 10, 10`)
    expect(result).toEqual( [
      { donors__donor_city: 'Portland', donors__count: 1005 },
      { donors__donor_city: 'San Francisco', donors__count: 988 },
      { donors__donor_city: 'Miami', donors__count: 977 },
      { donors__donor_city: 'Oklahoma City', donors__count: 932 },
      { donors__donor_city: 'Seattle', donors__count: 925 },
      { donors__donor_city: 'Atlanta', donors__count: 917 },
      { donors__donor_city: 'Las Vegas', donors__count: 914 },
      { donors__donor_city: 'Phoenix', donors__count: 910 },
      { donors__donor_city: 'Oakland', donors__count: 892 },
      { donors__donor_city: 'Dallas', donors__count: 878 }
    ])
  })

  test('city and is_teacher with fixed zip code', async () => {
    const result = await mongoDbDriver.query(`SELECT \`Donor City\`       \`donors__donor_city\`,
                                                     \`Donor Is Teacher\` \`donors__donor_is_teacher\`,
                                                     count(*)             \`donors__count\`
                                              FROM donors AS \`donors\`
                                              WHERE (\`donors\`."Donor Zip" = '941')
                                              GROUP BY 1,
                                                       2
                                              ORDER BY 3 DESC
                                              LIMIT 10000`)
    expect(result).toEqual( [
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
    ])
  })
});
