'use strict';
const clientModel = require('./client.model');

const NAME = 'name';

async function get(req, res) {
  try {    
    const QUERY = [];
    for (const key in req.query) {
      QUERY.push(key);
    }

    let client;
    switch (QUERY[0]) {
      case NAME : client = await clientModel.findByName(req.query[NAME]);
        break;
    default: client = await clientModel.find();
      break;
    }    
    return res.status(200).json(client);
  } catch(err) {
    if(err.status) {
      return res.status(err.status).json(err.body);
    }
    return res.status(500).json(err);
  }
}

async function getById(req, res) {
  try {
    const client = await clientModel.getById(req.params.id);
    return res.status(200).json(client);
  } catch (err) {
    if(err.status) {
      return res.status(err.status).json(err.body);
    }
    return res.status(500).json(err);
  }
}

async function save(req, res) {
  try {
    const client = await clientModel.save(req.body);
    return res.status(200).json(client);
  } catch(err) {
    if(err.status) {
      return res.status(err.status).json(err.body);
    }
    return res.status(500).json(err);
  }
}

async function update(req, res){
  try {
    const client = await clientModel.put(req.params.id, req.body);
    return res.status(200).json(client);
  } catch (err) {
    if(err.status) {
      return res.status(err.status).json(err.body);
    }
    return res.status(500).json(err);
  }
}
async function remove(req, res) {
  try {
    const client = await clientModel.remove(req.params.id);
    return res.status(200).json(client);
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