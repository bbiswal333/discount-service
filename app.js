/*eslint no-console: 0, no-unused-vars: 0, no-undef:0*/
/*eslint-env node, es6 */

'use strict';
var https = require('https');
var express = require('express');

//creating HTTP server
var port = process.env.PORT || 3000;
var server = require('http').createServer();
global.__base = __dirname + '/';


//Initialize Express App 
var app = express();

//Setup Routes
var router = require('./router')(app, server);

//Start the Server
server.on('request', app);
server.listen(port, function() {
	console.info(`HTTP Server: ${server.address().port}`);
});