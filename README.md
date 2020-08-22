# Cube.js MongoDB Database Driver

Pure Javascript SQL to Nosql Cube.js driver for MongoDB. Driver processes incoming SQL queries and convert them to corresponding native Nosql queries for the target database.

# Local testing

1. Download [dataset](https://www.kaggle.com/hanselhansel/donorschoose?select=Donors.csv) and put in into "data" directory in your project root
2. run `docker-compose up -d` to deploy local databases
3. run `yarn generate` to generate JavaScript MySQL parser, lexer and visitor classes
4. run `yarn test`
