'use strict';
const user = require('./user');

function routes(app) {
  app.use('/api/user', user);
  // app.use('/api/client');
  // app.use('/api/product');
  // app.use('/api/sale');
  // app.use('/api/login');
}

module.exports = routes;