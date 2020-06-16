const express = require('express');
const router = express.Router();

const UsersController = require('../controllers/usersController');

router.route('/')
	/* Get welcome message */
	.get(UsersController.getWelcomeMessage);


router.route('/users')
	/* GET all users. */
	.get(UsersController.getAllUsers);


router.route('/users/:username')
	/* GET user by username */
	.get(UsersController.getUserByUsername)
	/* PUT user by username */
	.put(UsersController.updateUserByUsername)
	/* DELETE user by username */
	.delete( UsersController.deleteUserByUsername);
	

router.route('/authenticate')
	/* Check if user is authenticated */
	.post( UsersController.login);


router.route('/register')
	/* Register a new user. */
	.post(UsersController.register);

module.exports = router;

 