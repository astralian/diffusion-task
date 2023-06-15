require('dotenv').config();

const username = process.env.MYSQL_USER;
const password = process.env.MYSQL_PASSWORD;
const database = process.env.MYSQL_DATABASE;
const host = 'localhost';
const dialect = 'mysql';

module.exports = { username, password, database, host, dialect };
