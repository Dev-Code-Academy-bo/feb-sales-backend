'use strict';

const express = require('express');
const productController = require('../product/product.controller');

const router = express.Router();

router
  .post('/', productController.save)
  .get('/', productController.get)
  .get('/:id', productController.getById)
  .put('/:id', productController.update)
  .delete('/:id', productController.remove);

module.exports = router;
