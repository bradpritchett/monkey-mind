const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
	process.env.MONGODB_URI ||
	"mongodb://localhost/monkeymind"
);

const userSeed = [

	{
		userName: "Brad",
		date: new Date(Date.now()),
		sessionDuration: 1800000,
		reportedAttention: 16,
		reportedMindfulness: 30
	},
	{
		userName: "Brad",
		date: new Date(Date.now()),
		sessionDuration: 1800000,
		reportedAttention: 25,
		reportedMindfulness: 20
	},
	{
		userName: "Diane",
		date: new Date(Date.now()),
		sessionDuration: 1500000,
		reportedAttention: 15,
		reportedMindfulness: 15
	}
];

db.User
	.remove({})
	.then(() => db.User.collection.insertMany(userSeed))
	.then(data => {
		console.log(data.result.n + " records inserted!");
		process.exit(0);
	})
	.catch(err => {
		console.error(err);
		process.exit(1);
	});
