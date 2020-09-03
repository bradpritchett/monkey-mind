const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
	process.env.MONGODB_URI || "mongodb://localhost/monkeymind"
);

const userSeed = [

	{
		userName: "Brad",
		email: "bradleyepritchett@gmail.com",
		sessions: [{
			date: new Date(Date.now()),
			sessionDuration: 1800000,
			setMinutes: 20,
			reportedAttention: 16,
			reportedMindfulness: 30
		}, {
			date: new Date(Date.now()),
			sessionDuration: 1800000,
			setMinutes: 20,
			reportedAttention: 16,
			reportedMindfulness: 30
		}]
	},
	{
		userName: "Diane",
		email: "dianeretz@gmail.com",
		sessions: [{
			date: new Date(Date.now()),
			sessionDuration: 1800000,
			setMinutes: 20,
			reportedAttention: 16,
			reportedMindfulness: 30
		}, {
			date: new Date(Date.now()),
			sessionDuration: 1800000,
			setMinutes: 20,
			reportedAttention: 16,
			reportedMindfulness: 30
		}]
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
