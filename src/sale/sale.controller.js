'use strict';
const saleModel = require('./sale.model');

const NAME = 'name';

async function get(req, res) {
  try {    
    const QUERY = [];
    for (const key in req.query) {
      QUERY.push(key);
    }

    let sale;
    switch (QUERY[0]) {
      case NAME : sale = await saleModel.findByName(req.query[NAME]);
        break;
    default: sale = await saleModel.find();
      break;
    }    
    return res.status(200).json(sale);
  } catch(err) {
    if(err.status) {
      return res.status(err.status).json(err.body);
    }
    return res.status(500).json(err);
  }
}

async function getById(req, res) {
  try {
    const sale = await saleModel.getById(req.params.id);
    return res.status(200).json(sale);
  } catch (err) {
    if(err.status) {
      return res.status(err.status).json(err.body);
    }
    return res.status(500).json(err);
  }
}

async function save(req, res) {
  try {
    const sale = await saleModel.save(req.body);
    return res.status(200).json(sale);
  } catch(err) {
    if(err.status) {
      return res.status(err.status).json(err.body);
    }
    return res.status(500).json(err);
  }
}

async function update(req, res){
  try {
    const sale = await saleModel.put(req.params.id, req.body);
    return res.status(200).json(sale);
  } catch (err) {
    if(err.status) {
      return res.status(err.status).json(err.body);
    }
    return res.status(500).json(err);
  }
}
async function remove(req, res) {
  try {
    const sale = await saleModel.remove(req.params.id);
    return res.status(200).json(sale);
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