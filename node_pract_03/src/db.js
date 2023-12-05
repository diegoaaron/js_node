const mysql = require('mysql2/promise');

async function connectDB() {
    const connection = await mysql.createConnection({
        host: '',
        user: '',
        password: '',
        database: 'expressdb',
        ssl: {
            rejectUnauthorized:false
        }
    });
    const result = await connection.query('SELECT 1 + 1 AS RESULT');
    console.log(result);
}


exports.connectDB = connectDB;