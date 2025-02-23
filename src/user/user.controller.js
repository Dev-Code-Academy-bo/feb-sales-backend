'use strict';
const userModel = require('./user.model');
function get(req, res) {
  return res.status(200).json(userModel);
}

module.exports = {
  get
}