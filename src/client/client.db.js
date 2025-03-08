'use strict';
const mongoose = require('mongoose');
const schema = require('./client.schema');
const errorBuilder = require('../commons/error-builder');

const DOCUMENT = 'client';
const MONGOOSE = 'mongoose';
const CONFIGURE_STATUS = 'configure-status';

let client = mongoose.model(DOCUMENT, schema.clientSchema);

async function create(data) {
  try {
    return await client.create(data);
  } catch(err) {
    throw errorBuilder.build(MONGOOSE, err);
  }
}

async function get() {
  try {
    return await client.find();
  } catch(err) {
    throw errorBuilder.build(MONGOOSE, err);
  }
}

async function getBy(data){
  try {
    return await client.find(data);
  } catch(err) {
    throw errorBuilder.build(MONGOOSE, err);
  }
}

async function getById(id){
  try {
    const res = await client.findById(id);
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
    await getById(id);
    const res =  await client.replaceOne({ _id: id }, data);
    if(res.modifiedCount === 1) {
      return getById(id);
    }
    throw errorBuilder.build(
      CONFIGURE_STATUS,
      {
        name: +' - database - update',
        message: 'not updated client',
        status: 400
      }
    );
  } catch (err) {
    if(err.body) {
      throw err;
    }
    throw errorBuilder.build(MONGOOSE, err);
  }
}

async function remove(id) {
  try {
    const res = await client.findOneAndDelete({_id: id });
    if(res) {
      return res;
    }
    throw errorBuilder.build(
      CONFIGURE_STATUS,
      {
        name: MONGOOSE+' - database - delete',
        message: 'not found client id',
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
  put,
  getBy
};
