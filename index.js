require('dotenv').config();
const cors = require('cors');
const express = require('express');
const { Pool } = require('pg');

const port = process.env.PORT;

// Database connection
const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT,
});

// Test the database connection
pool.connect((err, client, release) => {
  if (err) {
    console.error('Error connecting to database:', err.message);
  } else {
    console.log('Connected to database successfully!');
    release(); // Release the client back to the pool
  }
});

// Routes
const testRoutes = require('./routes/test');
const commentRoutes = require('./routes/comment')(pool);

const errorHandler = (error, req, res, next) => {
  const status = error.status || 422;
  res.status(status).send(error.message);
}

const app = express();

app.use(express.json());
app.use(cors());

// Register routes
app.use('/api', testRoutes);
app.use('/api', commentRoutes);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server Started at ${port}`);
});
