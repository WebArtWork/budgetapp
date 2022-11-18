var mongoose = require('mongoose');
var Schema = mongoose.Schema({
	name: String,
	amount: Number,
	description: String,
	wallet: {type: mongoose.Schema.Types.ObjectId, ref: 'Wallet'},
	author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	moderators: [{type: mongoose.Schema.Types.ObjectId, sparse: true, ref: 'User'}],
	url: {type: String, unique: true, sparse: true, trim: true}
});

Schema.methods.create = function(obj, user, sd) {
	this.author = user._id;
	this.moderators = [user._id];
	this.name = obj.name;
	this.wallet = obj.wallet;
	this.amount = obj.amount;
	this.description = obj.description;
}

module.exports = mongoose.model('Transaction', Schema);
