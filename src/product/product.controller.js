'use strict';

function get(req, res) {
  return res.status(200).json("It's ok, get Product");
}

module.exports = {
  get
}
