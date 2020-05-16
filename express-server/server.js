const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')

const app = express();

/* MongoDB URL from the docker-compose file.  */
const dbHost = 'mongodb://192.168.99.100:27019/unilibrary'; /* Comment this line if it doesn't work for you */
//const dbHost = 'mongodb://localhost:27019/unilibrary';   /* Decomment this line to connect to database for you */
mongoose.connect(dbHost, { useNewUrlParser: true, useFindAndModify: false });


/* Parsers for POST data */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* Cross Origin middleware */
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
});

const api = require('./src/routes/api');
app.use('/', api);


/* Get port from environment and store in Express. */
const port = process.env.PORT || '3000';
app.set('port', port);

/* Create HTTP server. */
const server = http.createServer(app);

/* Listen on provided port, on all network interfaces. */
server.listen(port, () => console.log(`API running on localhost:${port}`));