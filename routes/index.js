const router = require("express").Router();
const userController = require("../controllers/userController");
// User routes
router
	.route("/api/user")
	.post(userController.createUser);
router
	.route("/api/user/:email")
	.get(userController.findByEmail);

module.exports = router;
