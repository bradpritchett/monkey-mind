const router = require("express").Router();
const userController = require("../controllers/userController");
// User routes
router
	.route("/api/user")
	.post(userController.createUser)

router
	.route("/api/user/:email")
	.get(userController.findByEmail);
router
	.route("/api/user/:id")
	.put(userController.saveSession)

module.exports = router;
