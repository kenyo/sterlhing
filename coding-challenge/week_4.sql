-- chain logical expressions with `and`
SELECT name from city
WHERE Population > 120000 AND CountryCode = 'USA';

-- use `distinct` keyword to get unique values
SELECT DISTINCT city FROM station WHERE id % 2 = 0;
