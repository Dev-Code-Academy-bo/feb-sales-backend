'use strict';
const db = require('./product.db');

async function save(product) {
  return await db.create(product);
}

async function find(product) {
  return await db.get();
}

async function remove(productId) {
  return await db.remove(productId);
}

async function getById(productId) {
  return await db.getById(productId);
}

async function put(productId, product) {
  return await db.put(productId, product);
}

async function findByName(data) {
  return await db.getBy({ name: data });
}
module.exports = {
  save,
  find,
  remove,
  getById,
  put,
  findByName
};
