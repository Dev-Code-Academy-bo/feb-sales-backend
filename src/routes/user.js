'use strict';

const express = require('express');
const userController = require('../user/user.controller');
const middleware = require('../commons/middleware');
const userMiddleware = require('../user/user.middleware');

const router = express.Router();
const PHOTO = 'photo';

router
  .post('/', 
    userMiddleware.upload.single(PHOTO),
    middleware.encrypt,
    userController.save
  )
  .get('/', userController.get)
  .get('/:id', userController.getById)
  .put('/:id', userController.update)
  .delete('/:id', userController.remove);

module.exports = router;
