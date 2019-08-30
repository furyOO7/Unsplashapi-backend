var express = require('express');
var bodyparser = require('body-parser');

var app = express();

app.use(bodyparser.json({
    limit: "50mb"
}));


app.use(bodyparser.urlencoded({
    extended: true
}));
var user = require('./user')
app.use('/', user);

module.exports = app;