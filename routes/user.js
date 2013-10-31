
/*
 * GET users listing.
 */
var Models = require('../models/chaos_model.js')
	, User = Models[1]
	, Inbox = Models[2];

exports.profile = function(req, res){
	var myName = req.params.user
	
	User.findOne({name: myName}).exec(function (err, docs){
		res.send(doc);
	});
};

exports.inbox = function (req, res){
	var myName = req.params.user;
	User.findOne({name: myName}).exec(function (err, doc){
		//Get the first user and print to the screenie
		if (err)
			return
		res.send(doc.inbox);
	});
};


/** POST **/
exports.makeProfile = function(req, res){
	var name = req.params.name
		, year = req.body.year
		, blurb = req.body.blurb
		, listhelp = req.body.listhelp
		, listwant =  req.body.listwant;
	var newuser = new User({
		name: name,
		year: year,
		blurb: blurb,
		listhelp: listhelp,
		listwant: listwant
	});
	newuser.save(function (err) {
		if (err)
			return console.log("Error: We couldn't save the new Member");
		res.redirect('/' + name);
	});
};

exports.sendHi = function(req, res){
	var sender = req.params.name
		, touser = req.body.touser
		, date = new Date()
		, hi = reqq.body.hi;
	User.find({name: touser}).exec(function(err, doc){
		var message = new Inbox({sender: sender, date: date, message: 'Hi!'});
		res.redirect('/' + touser);
	});
}

