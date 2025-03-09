'use strict';

const express = require('express');
const loginController = require('../login/login.controller');
// const middleware = require('../commons/middleware');

const router = express.Router();

router
  .post('/', 
    // middleware.encrypt,
    loginController.validate
  );

module.exports = router;
