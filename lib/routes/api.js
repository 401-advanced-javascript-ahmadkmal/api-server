'use strict';
const express = require('express');
const params = require('../middleware/params');
const router = express.Router();

router.param('model',params);

router.get('/:model', getAllHandler);
router.get('/:model/:id', getOneHandler);
router.post('/:model', postHandler);
router.put('/:model/:id',putAllHandler);
router.delete('/:model/:id',deleteAllaunler) ;


function putAllHandler(req, res,next)  {
  req.model 
    .update(req.params.id,req.body)
    .then(data =>res.json(data))
    .catch(err=>next(err.message));
    
}

function deleteAllaunler(req, res,next)  {
  req.model
    .delete(req.params.id)
    .then(data =>res.json(data))
    .catch(err=>next(err.message));
}

function getAllHandler(req, res, next) {
  req.model
    .get()
    .then((data) => res.json({count:data.length ,'results': data}))
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