'use strict';
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let clientSchema = new Schema({
  name: String,
  nit: String
}, {
  versionKey: false
});

module.exports = {
  clientSchema
}