//dependencies for each module used
var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars');
var app = express();

//load environment variables
var dotenv = require('dotenv');
dotenv.load();

//add instagram api setup
var ig = require('instagram-node-lib');
ig.set('client_id', process.env.instagram_client_id);
ig.set('client_secret', process.env.instagram_client_secret);

ig.tags.info({
	name: 'sushi',
	complete: function(data) {
		console.log(data);
	}
});

//Configures the Template engine
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.get('/', function (req, res) {
	res.render('index');
});
app.get('/hashtag', function (req, res) {
	res.render('hashtag');
})
//set environment ports and start application
app.set('port', process.env.PORT || 3000);
http.createServer(app).listen(app.get('port'), function(){
	console.log('Express server listening on port ' + app.get('port'));
});