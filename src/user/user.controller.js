'use strict';
const userModel = require('./user.model');

async function get(req, res) {
  const users =  await userModel.find();
  return res.status(200).json(users);
}

async function save(req, res) {
  const user = await userModel.save(req.body);
  return res.status(200).json(user);
}

module.exports = {
  get,
  save
}