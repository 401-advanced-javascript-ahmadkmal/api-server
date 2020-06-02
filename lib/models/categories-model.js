'use strict';
const schema = require('./categories-schema');
const Model = require('./model.js');

class categories extends Model {
  constructor() {
    super(schema);
  }
}

module.exports = new categories();