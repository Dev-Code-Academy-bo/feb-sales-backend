'use strict';
const mongoose = require('mongoose');
const schema = require('./product.schema');
const errorBuilder = require('../commons/error-builder');

const DOCUMENT = 'product';
const MONGOOSE = 'mongoose';
const CONFIGURE_STATUS = 'configure-status';

let product = mongoose.model(DOCUMENT, schema.productSchema);

async function create(data) {
  try {
    return await product.create(data);
  } catch(err) {
    throw errorBuilder.build(MONGOOSE, err);
  }
}

async function get() {
  try {
    return await product.find();
  } catch(err) {
    throw errorBuilder.build(MONGOOSE, err);
  }
}

async function getBy(data){
  try {
    return await product.find(data);
  } catch(err) {
    console.log('error', err);
    throw errorBuilder.build(MONGOOSE, err);
  }
}

async function getById(id){
  try {
    const res = await product.findById(id);
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
    const res =  await product.replaceOne({ _id: id }, data);
    if(res.modifiedCount === 1) {
      return getById(id);
    }
    throw errorBuilder.build(
      CONFIGURE_STATUS,
      {
        name: +' - database - update',
        message: 'not updated product',
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
    const res = await product.findOneAndDelete({_id: id });
    if(res) {
      return res;
    }
    throw errorBuilder.build(
      CONFIGURE_STATUS,
      {
        name: MONGOOSE+' - database - delete',
        message: 'not found product id',
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
