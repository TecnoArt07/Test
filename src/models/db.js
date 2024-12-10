const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost', // Replace with your DB host
    user: 'root',      // Replace with your MySQL username
    password: process.env.ms_pwd, // Replace with your MySQL password
    database:'registration',
    multipleStatements: true, // This enables multiple SQL statements
});

module.exports = pool.promise();
