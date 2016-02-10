var Character = require('../models/Character.js');

// Create our necessary controller methods to perform all needed CRUD actions

exports.createOne = function(req, res) {
  var newCharacter = req.body;
  Character.create(newCharacter, function(err, createdCharacter) {
  	if (err) {
  		return res.json(err)
  	}
  	res.json(createdCharacter);
  });

};

exports.retrieve = function(req, res) {
	var query = req.query;
  Character.find(query, function(err, characters) {
  	if (err) {
  		return res.json(err);
  	}
  	res.json(characters);
  });
};

exports.retrieveOne = function(req, res) {
  var query = {_id: req.params.id};
  Character.findOne(query, function(err, response) {
    if (err) {
      return res.json(err);
    }
    res.json(response);
  });
};

exports.delete = function(req, res) {
	var query = req.query;
  Character.find(query, function(err, response) {
  	if (err) {
  		return res.json(err);
  	}
  	Character.remove(query, function(err) {
      if (err) {
        return res.json(err);
      }
      res.json(response);
    });
  });
};
