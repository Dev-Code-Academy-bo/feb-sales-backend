'use strict';
const user = require('./user');
const product = require('./product');
const client = require('./client');
const sale = require('./sale');

function routes(app) {
  app.use('/api/user', user);
  app.use('/api/product', product);
  app.use('/api/client', client);
  app.use('/api/sale', sale);
  // app.use('/api/login');
}

module.exports = routes;