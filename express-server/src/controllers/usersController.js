const mongoose = require('mongoose');
const User = require("../models/users.js")(mongoose);
const auth = require('passport-local-authenticate');

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

	/* Method to handle authentication */
	static async login(req, res) {
		var info = req.body;
		var query = {username: info.username};

		User.find(query, (err, users)=> {
			/* An error during the request */
			if(err) res.send({status: 404, error: { message: 'There was an error during your request.' } });

			/* Illegal arguments or user isn't present in database */
			if(users[0] == null) res.status(401).send( { message: 'There is no user with this username.' } );

			else {
				/* User with this username exist, verify if hash password is correct and responce to client.*/
				auth.hash(info.password, function(err, hashed) {
					auth.verify(users[0].password, hashed, function(err, verified) {
						
						if(verified){
							/* Correct password */
							var USER_TOKEN = "user jwt token";
							var authUser = {
								"name": users[0].name,
								"surname": users[0].surname,
								"username": users[0].username,
								"password": hashed.hash, 
								"role": users[0].role,
								"token": USER_TOKEN,
							}		
							res.status(200).send(authUser);
						}
						else{
							/* Incorrect password */
							res.status(401).send( { message: 'Wrong password. Try again.' } );	
						}
					});
				});				
			}
		});	
	};


	/* Method to handle the registration of a new user. */
	static async register(req, res){
		var user = new User(req.body);
		var query = {username: user.username};

			User.find(query, (err, users)=> {		
				/* An error during the request */
				if(err) res.send({status: 404, error: { message: 'There was an error during your request.' } });
			
				/* No user is registerd with this username. */
				if(users[0] == null){
				   /* No user with this username exist, proceed with the registration.*/
					auth.hash(user.password, function(err, hashed) {
						user.password = hashed.hash;									
						user.save(function(err, usr){
							if(err) res.send({status: 404, error: { message: 'There was an error during your request.' } });
							else res.status(201).send(usr);					
						})	
					});	
				}
				/* User with this username already registered. */
				else res.status(401).send({ message: 'Username "' + users[0].username + '" is already taken'}); 			
			});			
		
	};

}


/** Exporting user routes */
module.exports = UsersController;
