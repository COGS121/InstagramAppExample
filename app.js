//dependencies for each module used
var express = require('express');
var http = require('http');
var handlebars = require('express3-handlebars');
var app = express();

//load environment variables
var dotenv = require('dotenv');
dotenv.load();

//add instagram api 

//Configures the Template engine
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');

//routes
app.get('/', function (req, res) {
	res.render('index');
});

//set environment ports and start application
app.set('port', process.env.PORT || 3000);
http.createServer(app).listen(app.get('port'), function(){
	console.log('Express server listening on port ' + app.get('port'));
});