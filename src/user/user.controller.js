'use strict';

function get(req, res) {
  return res.status(200).json("It's ok, get User");
}

module.exports = {
  get
}