import mysql from 'mysql';

// MySQL database configuration
const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'glowingDB'
}

// Create a MySQL connection pool
const pool = mysql.createPool(dbConfig);
export default pool;
