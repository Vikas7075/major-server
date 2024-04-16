import express from 'express';
import bcrypt from 'bcrypt';
import { User } from '../modal/user.js'

const router = express.Router();

// register user
router.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // check if user is already exit
        const exitingUser = User.getUserByEmail(email);
        if (exitingUser) {
            return res.status(400).json({
                success: false,
                message: "User already exit"
            });
        }
        const hashPassword = bcrypt.hash(password, 10);
        const newUser = User.createUser({ username, email, password: hashPassword });
        // Respond with success message
        res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
        console.log(error);
    }
});

export default router;