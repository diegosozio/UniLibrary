const express = require('express');
const router = express.Router();

const UsersController = require('../controllers/usersController');

/* Get welcome message */
router.get('/', UsersController.getWelcomeMessage);

/* GET all users. */
router.get('/users', UsersController.getAllUsers);

/* Check if user is authenticated */
router.post('/authenticate', UsersController.login);

/* Register a new user. */
router.post('/register', UsersController.register);

module.exports = router;

 
/* GET one users. 
router.get('/users/:id', (req, res) => {
	User.findById(req.params.id, (err, users) => {
		if (err) res.status(500).send(error)

		res.status(200).json(users);
	});
});

/* Create a user. 
router.post('/users', (req, res) => {
	let user = new User({
		name: req.body.name,
		age: req.body.age
	});

	user.save(error => {
		if (error) res.status(500).send(error);

		res.status(201).json({
			message: 'User created successfully'
		});
	});
});
*/