'use strict';
const mongoose = require('mongoose');

const DB = 'backendfeb2025';
const REF = 'mongodb://localhost:27017/';

const DB_ATLAS = 'mongodb+srv://rockfercho:<PasswordDB>@feb2025nodejs.h9wb9.mongodb.net/?retryWrites=true&w=majority&appName=feb2025nodejs';

function connect() {
  mongoose.connect( REF+DB, {
  //mongoose.connect( DB_ATLAS, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
  console.log('Database MongoDB connected ....');
}

module.exports = {
  connect
};
