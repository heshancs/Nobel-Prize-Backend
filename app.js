const express = require('express');
const app = express();
const { sessionMiddleware, keycloakMiddleware } = require('./middleware/auth');
const securityMiddleware = require('./middleware/security');

// Load environment variables
require('dotenv').config();

// Apply middleware
app.use(express.json());
app.use(securityMiddleware);
app.use(sessionMiddleware);
app.use(keycloakMiddleware);

module.exports = app;
