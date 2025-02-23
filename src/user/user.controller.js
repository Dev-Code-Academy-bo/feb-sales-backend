'use strict';
const userModel = require('./user.model');

async function get(req, res) {
  const users =  await userModel.find();
  return res.status(200).json(users);
}

async function save(req, res) {
  try {
    const user = await userModel.save(req.body);
    return res.status(200).json(user);
  } catch(err) {
    return res.status(err.status).json(err.body);
    // if(err.status) {
    // }
    // return res.status(500).json(err.message);
  }
}

module.exports = {
  get,
  save
}