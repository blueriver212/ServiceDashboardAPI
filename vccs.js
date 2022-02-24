var express = require('express');
// var pg = require('pg'); // if a connection to pgAdmin is needed
var payments = require('express').Router();
var fs = require('fs');

const bodyParser = require('body-parser');

vccs.use(bodyParser.urlencoded({ extended: true }));

vccs.get('/vccs', function(res, req) {
    // get some other nice bits of data
    var cpu_utilization = Math.floor(Math.random()* 100);
    var vehicle_checks = Math.floor(Math.random()* 1000);

    res.json( 
        {
        "CPU_UTIL": cpu_utilization,
        "vehicle_checks": vehicle_checks
        } 
        );
});