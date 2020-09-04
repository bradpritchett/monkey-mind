const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
	email: { type: String, required: true },
	userName: { type: String, required: true },
	sessions: [{
		date: { type: Date, default: Date.now },
		sessionDuration: { type: Number },
		setMinutes: { type: Number },
		reportedAttention: { type: Number },
		reportedMindfulness: { type: Number }
	}]

});

const User = mongoose.model("User", userSchema);

module.exports = User;

