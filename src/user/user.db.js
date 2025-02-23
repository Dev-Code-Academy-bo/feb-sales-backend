'use strict';
const mongoose = require('mongoose');
const schema = require('./user.schema');
const errorBuilder = require('../commons/error-builder');

const DOCUMENT = 'user';
const MONGOOSE = 'mongoose';

let user = mongoose.model(DOCUMENT, schema.userSchema);

async function create(data) {
  try {
    return await user.create(data);
  } catch(err) {
    throw errorBuilder.build(MONGOOSE, err);
  }
}

async function get() {
  return await user.find();
}

module.exports = {
  create,
  get
};
