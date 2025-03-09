'use strict';
const productModel = require('./product.model');

const NAME = 'name';

async function get(req, res) {
  try {    
    const QUERY = [];
    for (const key in req.query) {
      QUERY.push(key);
    }

    let product;
    switch (QUERY[0]) {
      case NAME : product = await productModel.findByName(req.query[NAME]);
        break;
    default: product = await productModel.find();
      break;
    }    
    return res.status(200).json(product);
  } catch(err) {
    if(err.status) {
      return res.status(err.status).json(err.body);
    }
    return res.status(500).json(err);
  }
}

async function getById(req, res) {
  try {
    const product = await productModel.getById(req.params.id);
    return res.status(200).json(product);
  } catch (err) {
    if(err.status) {
      return res.status(err.status).json(err.body);
    }
    return res.status(500).json(err);
  }
}

async function save(req, res) {
  try {
    req.body.image = await `photos/${req.file.filename}`;
    const product = await productModel.save(req.body);
    return res.status(200).json(product);
  } catch(err) {
    if(err.status) {
      return res.status(err.status).json(err.body);
    }
    return res.status(500).json(err);
  }
}

async function update(req, res){
  try {
    const product = await productModel.put(req.params.id, req.body);
    return res.status(200).json(product);
  } catch (err) {
    if(err.status) {
      return res.status(err.status).json(err.body);
    }
    return res.status(500).json(err);
  }
}
async function remove(req, res) {
  try {
    const product = await productModel.remove(req.params.id);
    return res.status(200).json(product);
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