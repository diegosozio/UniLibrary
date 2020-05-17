const mongoose = require('mongoose');
const User = require("../models/usersModel.js")(mongoose);

class UsersController {

	/* Method to return welcome message. Used for testing. */
	static async getWelcomeMessage(req, res){
		res.send("Welcome to UniLibrary");
	};

	/* Method to return all the users in the database users collection */
	static async getAllUsers(req, res) {
		User.find({}, (err, user) => {
			if (err) res.status(500).send(error)
			res.json(user);	
    	});
	};

}


/** Exporting user routes */
module.exports = UsersController;


