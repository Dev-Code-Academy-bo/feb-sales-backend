'use strict';
const db = require('./client.db');

async function save(client) {
  return await db.create(client);
}

async function find(client) {
  return await db.get();
}

async function remove(clientId) {
  return await db.remove(clientId);
}

async function getById(clientId) {
  return await db.getById(clientId);
}

async function put(clientId, client) {
  return await db.put(clientId, client);
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
