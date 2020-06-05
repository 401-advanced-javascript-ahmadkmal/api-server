  
'use strict';
const { server } = require('../lib/server.js');
const supergoose = require('@code-fellows/supergoose');
const mockRequest = supergoose(server);

describe('categories API', () => {
  
  it('can post()', () => {
    const obj = { name: 'orange', description: 'color' };
    return mockRequest
      .post('/api/v1/categories')
      .send(obj)
      .then((data) => {
        const record = data.body; // _id
        Object.keys(obj).forEach((key) => {
          expect(record[key]).toEqual(obj[key]);
        });
      });
  });

  it('can get()', () => {
    const obj = { name: 'orange', description: 'color' };
    return mockRequest
      .post('/api/v1/categories')
      .send(obj)
      .then((data) => {
        return mockRequest.get('/api/v1/categories').then((result) => {
          Object.keys(obj).forEach((key) => {
            expect(result.body.results[0][key]).toEqual(obj[key]);
          });
        });
      });
  });
});

describe('products API', () => {
  
  it('can post()', () => {
    const obj = {  name: 'hakona', category: 'batata',description: 'temon and pomba',price: '2$' };
    return mockRequest
      .post('/api/v1/products')
      .send(obj)
      .then((data) => {
        const record = data.body; // _id
        
        Object.keys(obj).forEach((key) => {
          expect(record[key]).toEqual(obj[key]);
        });
      });
  });
  
  it('can get()', () => {
    const obj = { name: 'hakona', category: 'batata',description: 'temon and pomba',price: '2$' };
    return mockRequest
      .post('/api/v1/products')
      .send(obj)
      .then((data) => {
        return mockRequest.get('/api/v1/products').then((result) => {
          console.log('data',result.body.results[0]);
          Object.keys(obj).forEach((key) => {
            expect(result.body.results[0][key]).toEqual(obj[key]);
          });
        });
      });
  });
});