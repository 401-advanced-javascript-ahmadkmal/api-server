'use strict';
const mongoose = require('mongoose');

const products = mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required:true},
  price:{ Type: Number, required:true},
  inStock: {Type: Number, required:true},
});

module.exports = mongoose.model('api', products);