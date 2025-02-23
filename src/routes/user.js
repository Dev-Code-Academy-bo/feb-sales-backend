'user strict';

const express = require('express');
const userController = require('../user/user.controller');

const router = express.Router();

router
  .get('/', userController.get)
  .post('/', userController.save);
  // .put('/', userController.get)
  // .delete('/', userController.get);

module.exports = router;
