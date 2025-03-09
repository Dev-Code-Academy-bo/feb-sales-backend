'use strict';
const user = require('./user');
const product = require('./product');
const client = require('./client');
const sale = require('./sale');
const login = require('./login');

function routes(app) {
  app.use('/api/user', user);
  app.use('/api/product', product);
  app.use('/api/client', client);
  app.use('/api/sale', sale);
  app.use('/api/login', login);
}

module.exports = routes;