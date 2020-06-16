const mongoose = require('mongoose');
const User = require("../models/users.js")(mongoose);

var bcrypt = require('bcrypt');
const saltRounds = 10;


class UsersController {

	/* Method to return welcome message. Used for testing. */
	static async getWelcomeMessage(req, res){
		res.status(404).send({
			description: 'welcome was called'
		});	};

	/* Method to return all the users in the database users collection */
	static async getAllUsers(req, res) {
		User.find({}, (err, user) => {
			if (err) res.status(500).send(error)
			res.status(200).json(user);	
    	});
	};

	/* Method to return the user querying by user ID */
	static async getUserByUsername(req, res) {
		var query = {username: req.params.username};

		/* An error during the request */
		User.find(query, (err, users)=> {
			/* An error during the request */
			if(err) res.send({status: 404, error: { message: 'There was an error during your request.' } });

			/* Illegal arguments or user isn't present in database */
			if(users[0] == null) res.status(401).send( { message: 'There is no user with this username.' } );

			/* Send user to client */
			else {res.status(200).send(users[0]); }	
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
				bcrypt.compare(info.password, users[0].password, function (err, verified) {					

	 				/* Correct password */
					if(verified){
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
					else{
						/* Incorrect password */
						res.status(401).send( { message: 'Wrong password. Try again.' } );	
					}
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
				bcrypt.hash(user.password, saltRounds, function (err,   hash) {
					user.password = hash;									
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

		

	/* Method to handle the update of user information. */
	static async updateUserByUsername(req, res){
		var user = new User(req.body);
		var oldName = req.params.username;

		bcrypt.hash(user.password, saltRounds, function (error,   hash) {		
			User.findOneAndUpdate({'username': oldName}, 
				{$set: {
						'username': user.username,
						'name': user.name,
						'surname': user.surname,
						'password': hash,
						'role': user.role
					}
				}, { upsert: true }, function(error, result){	
					if(error) res.send({status: 404, error: { message: 'There was an error during your request.' } });
					else res.status(201).send(result);		
				}
			);
		});
	}; 

	/* Method to delete an user by username. */
	static async deleteUserByUsername(req, res){
		var query = {username: req.params.username}

		User.deleteOne(query,  
			function(error, result){	
				if(error) res.send({status: 404, error: { message: 'There was an error during your request.' } });
				else res.status(204 ).send(result);		
			}
		);
	}; 
	
}


/** Exporting user routes */
module.exports = UsersController;
