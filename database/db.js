const { Pool } = require('pg');
require('dotenv').config();

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

module.exports = pool;
