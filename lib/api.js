// lib/api.js

var models = require('../models');

exports.users = {
  all: function(request, reply) {
    models.User.findAll()
      .then(function(users) {
        reply(users).code(200);
      });
  }
};

exports.test = {
	index: function(request, reply) {
		reply("hello wolrd!");
	},
	name: function(request, reply) {
		reply("Name:"+request.params.name);
	},
	users: function(request, reply) {
		reply("say hello to: " + request.payload.name);
	}
}