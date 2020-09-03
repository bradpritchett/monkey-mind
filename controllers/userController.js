const db = require("../models");

// Defining methods for the userController
module.exports = {
	findByEmail: function (req, res) {
		db.User
			.find({
				'email': req.params.email
			})
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},
	createUser: function (req, res) {
		db.User
			.create(req.body)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err))
	},
	saveSession: function (req, res) {
		db.User
			.findOneAndUpdate({ _id: req.params.id }, { $push: { sessions: req.body.sessions } })
			.then(dbModel => console.log(dbModel))
			.catch(err => { console.log(err) });
	}
};
