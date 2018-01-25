/* jshint node: true */
"use strict";
var express = require("express");
var bodyParser = require("body-parser");
var routes = require("./serverroutes/serverroutes.js");
var app = express();

/* Create Application Json  Parser. Tells the system that we want Json to be used*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));


app.use(function (req, res, next) {
    /*Indicates which headers are supported by the response’s url for the purposes of the CORS protocol*/
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Accept,Origin,Referer,User-Agent');
	next();
});

routes(app);

var server = app.listen(4000, function() {
    console.log("Listening on port %s...", server.address().port);
   // app.emit("appStarted");
});

//Define request response in root URL (/)
app.get('/', function (req, res) {
    res.send('Hello World')
})

