
var express = require('express');
var http = require('http');
var handlebars = require('express3-handlebars');
var app = express();


//Configures the Template engine
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');

app.get('/', function (req, res) {
	res.render('index');
});

app.set('port', process.env.PORT || 3000);


http.createServer(app).listen(app.get('port'), function(){
	console.log('Express server listening on port ' + app.get('port'));
});