'use strict';
const userModel = require('./user.model');

async function get(req, res) {
  try {
    const users =  await userModel.find();
    return res.status(200).json(users);
  } catch(err) {
    if(err.status) {
      return res.status(err.status).json(err.body);
    }
    return res.status(500).json(err);
  }
}

async function getById(req, res) {
  try {
    const user = await userModel.getById(req.params.id);
    return res.status(200).json(user);
  } catch (err) {
    if(err.status) {
      return res.status(err.status).json(err.body);
    }
    return res.status(500).json(err);
  }
}

async function save(req, res) {
  try {
    const user = await userModel.save(req.body);
    return res.status(200).json(user);
  } catch(err) {
    if(err.status) {
      return res.status(err.status).json(err.body);
    }
    return res.status(500).json(err);
  }
}

async function remove(req, res) {
  try {
    console.log('remove id ', req.params.id);
    const user = await userModel.remove(req.params.id);
    return res.status(200).json(user);
  } catch (err) {
    if(err.status) {
      return res.status(err.status).json(err.body);
    }
    return res.status(500).json(err);
  }
}

module.exports = {
  get,
  save,
  remove,
  getById
}