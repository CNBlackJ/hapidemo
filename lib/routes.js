// lib/routes.js

var api = require('./api');
var Joi = require('joi');

module.exports = [
  {
    method: 'GET',
    path: '/api/users',
    handler: api.users.all
  },
  {
  	method: 'GET',
  	path: '/api/test',
  	handler: api.test.index
  },
  {
    method: 'GET',
    path: '/api/{name}',
    handler: api.test.name
  },
  {
    method: 'POST',
    path: '/api/users',
    handler: api.test.users,
    config: {
        validate: {
          payload: {
            name: Joi.string().min(3).required()
          }
        }
    }
  }
];
