
var express = require('express');
var path = require('path');
var app = express();
var fs = require('fs');

// add an https servert to serve the files

var http = require('http'); var https = require('https');

var httpServer = http.createServer(app);

const port = process.env.PORT || 3000;

httpServer.listen(port, () => console.log(`Listening on ${port}`));

app.use(function(req, res, next) {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
	res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	next();
});

app.get('/',function (req, res) {
	res.send("Hello world from the data API on port"+port)
});


app.use(function(req,res,next) {
	var filename = path.basename(req.url);
	var extension = path.extname(filename);
	console.log("The file "+filename+" was requested.");
	next(); // this is what i could have been missing
})

const payments = require('./payments.js');
app.use('/', payments);

// const vccs = require('./vccs.js');
// app.use('/vccs', vccs);

const bodyParser = require('body-parser');