'use strict';
const express = require('express');
const categories = require('../models/categories-model');
const product = require('../models/product-model');
const router = express.Router();

router.param('model', getModel);
function getModel(req, res, next) {
  const model = req.params.model; // ==>cat ||prod
  switch (model) {
  case 'categories':
    req.model = categories;
    next();
    return;
  case 'products':
    req.model = product;
    next();
    return;
  default:
    next('invalid model');
    return;
  }
}
router.get('/:model', getAllHandler);
router.get('/:model/:id', getOneHandler);
router.post('/:model', postHandler);

function getAllHandler(req, res, next) {
  req.model
    .get()
    .then((data) => res.json(data))
    .catch((err) => next(err.message));
}

function getOneHandler(req, res, next) {
  req.model
    .get(req.params.id)
    .then((data) => res.json(data))
    .catch((err) => next(err.message));
}
async function postHandler(req, res, next) {
  try {
    const data = await req.model.create(req.body);
    res.json(data);
  } catch (e) {
    next(e.message);
  }
}

module.exports = router;