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
	createSession: function (req, res) {
		db.User
			.findOneAndUpdate(req.body)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	}
};
