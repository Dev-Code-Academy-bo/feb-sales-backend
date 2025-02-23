'use strict';
const mongoose = require('mongoose');
const schema = require('./user.schema');

const DOCUMENT = 'user';

let user = mongoose.model(DOCUMENT, schema.userSchema);

async function create(data) {
  return await user.create(data);
}

async function get() {
  return await user.find();
}

module.exports = {
  create,
  get
};
