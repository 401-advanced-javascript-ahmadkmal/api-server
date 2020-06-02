'use strict';
require('@code-fellows/supergoose');
const categories = require('../lib/models/categories-model.js');
const product = require('../lib/models/products-model.js');
const obj = { name: 'apple', calories: 20, type: 'FRUIT' };

describe('categories Model', () => {
  it('create', () => {
    return categories.create(obj).then((result) => {
      Object.keys(obj).forEach((key) => {
        expect(result[key]).toEqual(obj[key]);
      });
    });
  });
  it('get', () => {
    return categories.get().then((result) => {
      Object.keys(obj).forEach((key) => {
        expect(result[0][key]).toEqual(obj[key]);
      });
    });
  });
});
describe('product Model', () => {
  it('create', () => {
    return product.create(obj).then((result) => {
      Object.keys(obj).forEach((key) => {
        expect(result[key]).toEqual(obj[key]);
      });
    });
  });
  it('get', () => {
    return product.get().then((result) => {
      Object.keys(obj).forEach((key) => {
        expect(result[0][key]).toEqual(obj[key]);
      });
    });
  });
});