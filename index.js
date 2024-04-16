import express from 'express';
import bodyParser from 'body-parser'
import authRoutes from './routes/Auth.js';
import pool from './config/database.js';

const app = express();

// Middleware
app.use(bodyParser.json());
pool();

// Routes
app.use('/api/auth', authRoutes);

// Error handler middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
