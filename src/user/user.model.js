'use strict';
const db = require('./user.db');

async function save(user) {
  return await db.create(user);
}

async function find(user) {
  return await db.get();
}

async function remove(userId) {
  return await db.remove(userId);
}

async function getById(userId) {
  return await db.getById(userId);
}

async function put(userId, user) {
  return await db.put(userId, user);
}

module.exports = {
  save,
  find,
  remove,
  getById,
  put
};
