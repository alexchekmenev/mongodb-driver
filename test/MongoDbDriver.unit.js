const { convert } = require('../src/index')

const input = 'SELECT count(propA), Count(*) total, `donors` `donors__donor_state`, lol `donors__count` ' +
    'FROM b, test.donors AS `donors`, a WHERE a = "blabla" OR 1 > 0 GROUP BY 1 ASC, state, COUNT(a) ' +
    'ORDER BY 2 ASC LIMIT 10000 OFFSET 10;'
convert(input)

const input1 = 'SELECT\n' +
    '  count(*) `donors__count` FROM\n' +
    '  test.donors AS `donors` WHERE\n' +
    '  10 < 100 && `donors`."Donor City" = "San Francisco" LIMIT 10000'
convert(input1)

const real =
    '    SELECT\n' +
    '      1 as one, 1 as one2, `Donor City` `donors__donor_city`, `Donor State` `donors__donor_state`, count(*) `donors__count`\n' +
    '    FROM\n' +
    '       donors AS `donors` WHERE 10 < 100\n' +
    '  GROUP BY 1, donors.`Donor City`, 4 ORDER BY 1, 3 DESC LIMIT 10000 []'
convert(real)

const withSegment = 'SELECT\n' +
    '      `Donor City` `donors__donor_city`, count(*) `donors__count`\n' +
    '    FROM\n' +
    '      donors AS `donors`\n' +
    '  WHERE (`donors`."Donor State" = \'Illinois\') GROUP BY 1 ORDER BY 2 DESC LIMIT 10000'
convert(withSegment)

// convert('select count(*) as tot from donors')

// TODO test - columnName with $
// TODO test - nested function calls in SELECT, GROUP BY
