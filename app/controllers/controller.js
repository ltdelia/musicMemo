var express = require("express");
var app = express();

var path = require('path');


module.exports = function(app){

	app.get('/', function(req, res){
		res.sendFile(path.join(__dirname+'/../public/index.html'));
	});

	app.get('/learnMore', function(req, res){
		res.sendFile(path.join(__dirname+'/../public/learnMore.html'));
	});

	app.get('/form', function(req, res){
		res.sendFile(path.join(__dirname+'/../public/studentForm.html'));
	});
}