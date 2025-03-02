'user strict';

const express = require('express');
const userController = require('../user/user.controller');

const router = express.Router();

router
  .post('/', userController.save)
  .get('/', userController.get)
  .get('/:id', userController.getById)
  .put('/:id', userController.update)
  .delete('/:id', userController.remove);

module.exports = router;
