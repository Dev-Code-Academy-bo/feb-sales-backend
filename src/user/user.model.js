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

module.exports = {
  save,
  find,
  remove
};
