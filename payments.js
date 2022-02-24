var express = require('express');
// var pg = require('pg'); // if a connection to pgAdmin is needed
var payments = require('express').Router();
var fs = require('fs');

const bodyParser = require('body-parser');


payments.use(bodyParser.urlencoded({ extended: true}));

payments.get('/payments', function(req, res) {
    res.send('hello world');
});

payments.get('/payments/DD', function(req, res) {
    // generate a random number between 1 and 10
    var DD_payments = Math.floor(Math.random() * 10);

        
    res.json( {val: DD_payments} );
    //res.send('hello world');
});

payments.get('/payments/IOD', function(req, res) {
    res.send('hello world');
});

module.exports = payments;


