require('dotenv').config()
const mysql = require('mysql2/promise');

// Create a connection pool
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10, // Adjust as needed
    queueLimit: 0,
});

module.exports = {
    query: async (text, params) => {
        try {
            const result = pool.query(text, params)
            return result;
        }
        catch (err) {
            if (err) throw err
        }
    }
};