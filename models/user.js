const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
	userName: { type: String, required: true },
	date: { type: Date, default: Date.now },
	sessionDuration: { type: Number, required: true },
	reportedAttention: { type: Number },
	reportedMindfulness: { type: Number }

});

const User = mongoose.model("User", userSchema);

module.exports = User;
