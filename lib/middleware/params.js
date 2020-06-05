'use strict';
const categories = require('../models/categories-model');
const product = require('../models/products-model');
module.exports = (req, res, next) =>{
  const model = req.params.model; // ==>cat ||prod
  switch (model) {
  case 'categories':
    req.model = categories;
    // console.log(req) ;
    next();
    return;
  case 'products':
    req.model = product;
    // console.log(req) ;
    next();
    return;
  default:
    next('invalid model');
    return;
  }
};