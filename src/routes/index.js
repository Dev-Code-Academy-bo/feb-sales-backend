'use strict';
const user = require('./user');
const product = require('./product');

function routes(app) {
  app.use('/api/user', user);
  app.use('/api/product', product);
  // app.use('/api/client');
  // app.use('/api/sale');
  // app.use('/api/login');
}

module.exports = routes;