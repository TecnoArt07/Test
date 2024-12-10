const fs = require('fs');
const path = require('path');
const mysql = require('mysql2/promise');

(async () => {
    const dbConfig = {
        host: 'localhost',
        user: 'root',
        password: 'password',
    };

    try {
        // Connect without a database initially
        const connection = await mysql.createConnection(dbConfig);

        console.log('Creating database if not exists...');
        await connection.query('CREATE DATABASE IF NOT EXISTS registration');
        console.log('Database created or already exists.');

        // Use the database
        await connection.query('USE registration');

        // Read SQL file
        const sqlFilePath = path.join(__dirname, '../registration_schema.sql');
        const sqlScript = fs.readFileSync(sqlFilePath, 'utf8');
        console.log('SQL Script Content:\n', sqlScript);

        console.log('Executing SQL script...');
        await connection.query(sqlScript);
        console.log('Database setup completed successfully.');

        await connection.end();
    } catch (error) {
        console.error('Error setting up the database:', error.message);
    }
})();
