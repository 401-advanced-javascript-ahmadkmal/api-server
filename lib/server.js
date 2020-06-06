'use strict';
const express = require('express');
const logRequest = require('./middleware/logger.js');
const timeRequest = require('./middleware/timestamp.js');
const notFound = require('./middleware/404.js');
const serverError = require('./middleware/500.js');
const app = express();

// global middleware
app.use(express.json()); //body-parser to add body to the req
app.use(timeRequest);
app.use(logRequest);

// categories

var categories= [];
app.get('/categories', (req, res) => {
  const count = categories.length;
  const results = categories;
  res.json({ count, results });
});
app.post('/categories', (req, res) => {
  const {name} = req.body;
  console.log('name', req.body);
  const record = req.body; //{name:}
  record.id = categories.length + 1;
  categories.push(record);
  res.json(record);
});
app.get('/categories/:id', (req, res) => {
  let obj = {};
  for (let index = 0; index < categories.length; index++) {
    obj = categories[index];
    if(obj.id==req.params.id)
      break;
  }
  res.json(obj);
});
app.put('/categories/:id', (req, res) => {
  let obj = {};
  var index;
  for ( index = 0; index < categories.length; index++) {
    obj = categories[index];
    if(obj.id==Number(req.params.id))
      break;
  }
  if(obj.id!=req.params.id){
    res.status(404);
    res.statusMessage = 'categores not found';
    res.json({ error: 'not Found' }); 
  }
  const { name } = req.body;
  console.log('name', name);
  const record = { name }; //{name:}
  record.id = req.params.id;
  categories[index]=record;
  res.json(record);
});
app.delete('/categories/:id', (req, res) => {
  let obj = {};
  var index;
  for ( index = 0; index < categories.length; index++) {
    obj = categories[index];
    console.log('this is obj:',obj.id);
    if(obj.id==Number(req.params.id))
      break;
  }
  console.log('this is obj after brack:',obj);
  console.log('this is req.params.id after brack:',req.params.id);
  if(obj.id!=req.params.id){
    res.status(404);
    res.statusMessage = 'categories not found';
    res.json({ error: 'not Found' }); 
  }
  categories.splice(index, 1);
  res.json(obj);
});

//products

var products= [];
app.get('/products', (req, res) => {
  const count = products.length;
  const results = products;
  res.json({ count, results });
});
app.post('/products', (req, res) => {
  const { name } = req.body;
  console.log('name', name);
  const record = req.body; //{name:}
  record.id = products.length + 1;
  products.push(record);
  res.json(record);
});
app.get('/products/:id', (req, res) => {
  let obj = {};
  for (let index = 0; index < products.length; index++) {
    obj = products[index];
    if(obj.id===req.params.id)
      break;
  }
  res.json(obj);
});
app.put('/products/:id', (req, res) => {
  let obj = {};
  var index;
  for ( index = 0; index < products.length; index++) {
    obj = products[index];
    if(obj.id===req.params.id)
      break;
  }
  if(obj.id!==req.params.id){
    res.status(404);
    res.statusMessage = 'products not found';
    res.json({ error: 'not Found' }); 
  }
  const { name } = req.body;
  console.log('name', name);
  const record = { name }; //{name:}
  record.id = req.params.id;
  products[index]=record;
  res.json(record);
});
app.delete('/products/:id', (req, res) => {
  let obj = {};
  var index;
  for ( index = 0; index < products.length; index++) {
    obj = products[index];
    if(obj.id===req.params.id)
      break;
  }
  if(obj.id!==req.params.id){
    res.status(404);
    res.statusMessage = 'categores not found';
    res.json({ error: 'not Found' }); 
  }
  products.splice(index, 1);
  res.json(obj);
});


app.use('*', notFound);
app.use(serverError);

module.exports = {
  server: app,
  start: (port) => {
    const PORT = port|| 3000;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};