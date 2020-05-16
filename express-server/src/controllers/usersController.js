const mongoose = require('mongoose');
const User = require("../models/users.js")(mongoose);

class UsersController {

	/* Method to return welcome message. Used for testing. */
	static async getWelcomeMessage(req, res){
		console.log("welcome was called");

		res.status(404).send({
			description: 'welcome was called'
		});	};

	/* Method to return all the users in the database users collection */
	static async getAllUsers(req, res) {
		console.log("getUsers was called");

		User.find({}, (err, user) => {
			if (err) res.status(500).send(error)
			res.json(user);	
    	});
	};

	static async login(req, res) {
		var info = req.body;
		var query = {$and: [{username: info.username},{password: info.password}]};

		User.find(query, (err, users)=> {
			/* An error during the request */
			if(err) res.send({status: 404, error: { message: 'There was an error during your request.' } });
			/* Illegal arguments or user isn't present in database */
			if(users[0] == null) res.status(401).send( { message: 'Wrong password or username.' } );

			else {
				/* Server decides what information to send back to the client, adding token for easy navigation */
				var USER_TOKEN = "user jwt token";
				var authUser = {
					"name": users[0].name,
					"surname": users[0].surname,
					"username": users[0].username,
					"password": users[0].password,
					"role": users[0].role,
					"token": USER_TOKEN,
				}		
				res.status(200).send(authUser);
			}
		});	
	};
}

/** Exporting user routes */
module.exports = UsersController;
