'use strict';
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let productSchema = new Schema({
  name: String,
  detail: String,
  image: String,
  category: String,
  price: Number,
  salePrice: Number,
  stock: Number
}, {
  versionKey: false
});

module.exports = {
  productSchema
}