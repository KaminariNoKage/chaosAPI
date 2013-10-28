
/*
 * GET home page.
 */
var Models = require('../models/chaos_model.js')
	, User = Models[1]
	, Inbox = Models[2];

exports.index = function(req, res){
	console.log('Calling Index');
	User.find({}).exec(function(err, users){
		console.log(users);
		res.send(users);
	})
};