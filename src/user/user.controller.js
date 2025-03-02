'use strict';
const userModel = require('./user.model');

const NAME = 'name';
const USERNAME = 'username';

async function get(req, res) {
  try {    
    const QUERY = [];
    for (const key in req.query) {
      QUERY.push(key);
    }

    let user;
    switch (QUERY[0]) {
      case NAME : user = await userModel.findByName(req.query[NAME]);
        break;
      case USERNAME : user = await userModel.findByUserName(req.query[USERNAME]);
        break;
    default: user = await userModel.find();
      break;
    }    
    return res.status(200).json(user);
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

async function update(req, res){
  try {
    const user = await userModel.put(req.params.id, req.body);
    return res.status(200).json(user);
  } catch (err) {
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
  getById,
  update
}