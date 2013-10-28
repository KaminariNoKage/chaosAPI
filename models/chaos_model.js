/**
 * Schema models.
 */

var mongoose = require('mongoose')
        , Schema = mongoose.Schema;

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {});

var userSchema = mongoose.Schema({
        name: String,
        year: String,
        blurb: String,
        listhelp: Array,
        listwant: Array,
        inbox: [
          {
            sender: String,
            date: String,
            message: String
          }
        ]
});

var User = mongoose.model('User', userSchema);
module.exports = User;