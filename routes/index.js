
/*
 * GET home page.
 */
var User = require('../models/chaos_model.js');

exports.index = function(req, res){
	console.log('Calling Index');
	User.find({}).exec(function(err, users){
		console.log(users);
		res.send(users);
	})
};