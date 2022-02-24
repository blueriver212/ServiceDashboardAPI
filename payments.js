var express = require('express');
// var pg = require('pg'); // if a connection to pgAdmin is needed
var payments = require('express').Router();
var fs = require('fs');

const bodyParser = require('body-parser');


payments.use(bodyParser.urlencoded({ extended: true}));

payments.get('/payments', function(req, res) {
    // generate a random number between 1 and 10
    var DD_payments = Math.floor(Math.random() * 100);
    var IOD_payments = Math.floor(Math.random() * 100);

        
    res.json( 
        {
        "DD": DD_payments,
        "IOD": IOD_payments
        } 
        );
    //res.send('hello world');
});

module.exports = payments;


