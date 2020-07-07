## UniLibrary
UniLibrary is a project done for the course of Web Application and Services. To implmement this project has been used the MEAN stack.


## Requirments
Make sure you have npm, docker and docker-compose installed.
Docker-compose should be version 1.6 or higher.

### Clone repository
```bash
$ git clone https://github.com/nour1988/UniLibrary.git
```
 ### Client side
 ```bash
 cd UniLibrary
 cd angular-client
 npm install
 ```
 ### Server side
 ```bash
 cd ..\
 cd express-server
 npm install
 ```
 
 ### Docker compose 
 ```bash
 cd ..\
 docker-compose up --build
 ```
 
### Log in credentials
 ```bash
 username: user   password: user123
 username: librarian   password: librarian123
 username: admin   password: admin123
 ```
 
 App should be running in `localhost:4200`
 Server should be running in `localhost:3000`
