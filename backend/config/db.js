const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'bus@admin',
    password: '123456',
    database: 'vip'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
    } else {
        console.log('Connected to the database');
    }
});

module.exports = db;