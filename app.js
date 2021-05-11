var express = require('express');
var bodyparser = require('body-parser');
var cors = require('cors')

var app = express();

app.use(cors())
 

app.use(bodyparser.json({
    limit: "50mb"
}));


app.use(bodyparser.urlencoded({
    extended: true
}));
var user = require('./user')
app.use('/', user);

module.exports = app;