'user strict';

const express = require('express');
const productController = require('../product/product.controller');

const router = express.Router();

router
  .get('/', productController.get);
  // .post('/', userController.get)
  // .put('/', userController.get)
  // .delete('/', userController.get);

module.exports = router;
