'use strict';
const mongoose = require('mongoose');
const schema = require('./sale.schema');
const errorBuilder = require('../commons/error-builder');

const DOCUMENT = 'sale';
const MONGOOSE = 'mongoose';
const CONFIGURE_STATUS = 'configure-status';

let sale = mongoose.model(DOCUMENT, schema.saleSchema);

async function create(data) {
  try {
    return await sale.create(data);
  } catch(err) {
    throw errorBuilder.build(MONGOOSE, err);
  }
}

async function get() {
  try {
    return await sale.find()
        .populate('idProduct')
        .populate('idUser')
        .populate('idClient');
  } catch(err) {
    throw errorBuilder.build(MONGOOSE, err);
  }
}

async function getBy(data){
  try {
    return await sale.find(data)
        .populate('idProduct')
        .populate('idUser')
        .populate('idClient');
  } catch(err) {
    throw errorBuilder.build(MONGOOSE, err);
  }
}

async function getById(id){
  try {
    const res = await sale.findById(id);
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
    const res =  await sale.replaceOne({ _id: id }, data);
    if(res.modifiedCount === 1) {
      return getById(id);
    }
    throw errorBuilder.build(
      CONFIGURE_STATUS,
      {
        name: +' - database - update',
        message: 'not updated sale',
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
    const res = await sale.findOneAndDelete({_id: id });
    if(res) {
      return res;
    }
    throw errorBuilder.build(
      CONFIGURE_STATUS,
      {
        name: MONGOOSE+' - database - delete',
        message: 'not found sale id',
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
