import pool from '../config/database.js';

//create a user model
export const User = {};

//get user by email
User.getUserByEmail = async (email) => {
    try {
        const [rows] = pool.query(`SELECT * FROM users WHERE email = ?`, [email]);
        return rows[0];
    } catch (error) {
        console.log(error);
    }
};

// create a new user
User.createUser = async (userData) => {
    try {
        const [result] = pool.query('INSERT INTO users SET ?', [userData]);
        return { id: result.insertId, ...userData };
    } catch (error) {
        console.log(error);
    }
}