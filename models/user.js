const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
	email: { type: String, required: true },
	userName: { type: String, required: true },
	sessions: [{
		date: { type: Date, default: Date.now },
		sessionDuration: { type: Number, required: true },
		mindfullness: { type: Number, required: true },
		attention: { type: Number, required: true }
	}]

});

const User = mongoose.model("User", userSchema);

module.exports = User;

