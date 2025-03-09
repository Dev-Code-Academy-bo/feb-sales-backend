'use strict';

const express = require('express');
const productController = require('../product/product.controller');
const productMiddleware = require('../product/product.middleware');

const router = express.Router();
const IMAGE = 'image';

router
  .post('/',
    productMiddleware.upload.single(IMAGE),
    productController.save
  )
  .get('/', productController.get)
  .get('/:id', productController.getById)
  .put('/:id', productController.update)
  .delete('/:id', productController.remove);

module.exports = router;
