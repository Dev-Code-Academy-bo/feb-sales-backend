'use strict';
const db = require('./user.db');

async function save(user) {
  return await db.create(user);
}

module.exports = {
  save
};
