'use strict';
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let saleSchema = new Schema({
  idProduct: { type: Schema.Types.ObjectId, ref: 'product', required: true },
  idUser: { type: Schema.Types.ObjectId, ref: 'user', required: true },
  idClient: { type: Schema.Types.ObjectId, ref: 'client', required: true },
  quantity: Number,  
  date: { type: Date }  
}, {
  versionKey: false
});

module.exports = {
  saleSchema
}