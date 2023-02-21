const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'lab_mysql',
    password: 'secure'
});

module.exports = pool.promise();