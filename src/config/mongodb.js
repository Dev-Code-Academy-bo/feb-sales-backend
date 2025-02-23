'use strict';
const mongoose = require('mongoose');

const DB = 'backendfeb2025';
const REF = 'mongodb://localhost:27017/';

function connect() {
  mongoose.connect( REF+DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
  console.log('Databse MongoDB connected ....');
}

module.exports = {
  connect
};
