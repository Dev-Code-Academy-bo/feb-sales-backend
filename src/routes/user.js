'user strict';

const express = require('express');
const userController = require('../user/user.controller');

const router = express.Router();

router
  .get('/', userController.get)
  .get('/:id', userController.getById)
  .post('/', userController.save)
  // .put('/', userController.get)
  .delete('/:id', userController.remove);

module.exports = router;
