const session = require('express-session');
const Keycloak = require('keycloak-connect');
// const sessionConfig = require('../config/sessionConfig'); // Assuming you have a sessionConfig.js file in the config folder

const memoryStore = new session.MemoryStore();

const keycloak = new Keycloak({
  store: memoryStore,
}, './config/keycloak.json');

const sessionMiddleware = session({
  secret: 'sessionConfig.secret',
  resave: false,
  saveUninitialized: true,
  store: memoryStore,
});

const keycloakMiddleware = keycloak.middleware();

module.exports = { sessionMiddleware, keycloakMiddleware };
