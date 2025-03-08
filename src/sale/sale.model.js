'use strict';
const db = require('./sale.db');
const productModel = require('../product/product.model');

async function save(sale) {
  try{
    const result = await db.create(sale);
    const product = await productModel.getById(sale.idProduct);
    product.stock = product.stock - sale.quantity;
    await productModel.put(sale.idProduct, product);
    return result;
  } catch(err){
    throw err;
  }
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
