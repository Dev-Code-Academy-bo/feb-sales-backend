'use strict';
const db = require('./sale.db');

async function save(sale) {
  return await db.create(sale);
}

async function find(sale) {
  return await db.get();
}

async function remove(saleId) {
  return await db.remove(saleId);
}

async function getById(saleId) {
  return await db.getById(saleId);
}

async function put(saleId, sale) {
  return await db.put(saleId, sale);
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
