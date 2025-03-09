'use strict';
const loginModel = require('./login.model');

async function validate(req, res) {
  try {
    const login = await loginModel.validate(req.body);
    return res.status(200).json(login);
  } catch (err) {
    if(err.status) {
      return res.status(err.status).json(err.body);
    }
    return res.status(500).json(err);
  }
}

module.exports = {
  validate
}