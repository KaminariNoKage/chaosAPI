
/*
 * GET home page.
 */
var User = require('../models/chaos_model.js');

exports.index = function(req, res){
	console.log('Calling Index');
	var mock = new User({name:'Jane Roe', year:'2015', blurb:'I like dogs and long walks on the beach.', listhelp:['ModCon', 'UOCD'], listwant:['SCOPE', 'ADE'], inbox:[]})
	newuser.save(function (err) {
		if (err)
			return console.log("Error: We couldn't save the new Member");
		User.find({}).exec(function(err, users){
			console.log(users);
			res.send(users);
		})
	});
};