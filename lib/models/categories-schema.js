'use strict';
const mongoose = require('mongoose');

const categories = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: Number, required: true },
});

module.exports = mongoose.model('api', categories);