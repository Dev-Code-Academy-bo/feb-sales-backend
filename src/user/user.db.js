'use strict';
const mongoose = require('mongoose');
const schema = require('./user.schema');
const errorBuilder = require('../commons/error-builder');

const DOCUMENT = 'user';
const MONGOOSE = 'mongoose';
const CONFIGURE_STATUS = 'configure-status';

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

async function getById(id){
  try {
    const res = await user.findById(id);
    if(res) {
      return res;
    }
    throw errorBuilder.build(
      CONFIGURE_STATUS,
      {
        name: MONGOOSE+' - database - findById',
        message: 'not found id',
        status: 404
      }
    );
  } catch(err) {
    if(err.status === 404) {
      throw err;
    }
    throw errorBuilder.build(MONGOOSE, err);
  }
}

async function put(id, data){
  try {
    return user.replaceOne({ _id: id }, data);
  } catch (err) {
    throw errorBuilder.build(MONGOOSE, err);
  }
}

async function remove(id) {
  try {
    const res = await user.findOneAndDelete({_id: id });
    if(res) {
      return res;
    }
    throw errorBuilder.build(
      CONFIGURE_STATUS,
      {
        name: MONGOOSE+' - database - delete',
        message: 'not found user id',
        status: 404
      }
    );
  } catch(err) {
    if(err.status === 404) {
      throw err;
    }
    throw errorBuilder.build(MONGOOSE, err);
  }
}

module.exports = {
  create,
  get,
  remove,
  getById,
  put
};
