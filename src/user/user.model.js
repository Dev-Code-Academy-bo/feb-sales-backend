'use strict';
const db = require('./user.db');

async function save(user) {
  return await db.create(user);
}

async function find(user) {
  return await db.get();
}

module.exports = {
  save,
  find
};
