'use strict';
const userModel = require('./user.model');

function get(req, res) {
  return res.status(200).json('no implemented!!!');
}

async function save(req, res) {
  const user = await userModel.save(req.body);
  return res.status(200).json(user);
}

module.exports = {
  get,
  save
}