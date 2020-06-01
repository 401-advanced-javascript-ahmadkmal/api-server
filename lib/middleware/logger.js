'use strict';
module.exports = (req, res, next) => {
  console.log('Request :', req.path, req.method,req.requestTime);
  next();
};