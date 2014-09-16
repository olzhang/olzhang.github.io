var path = require('path')
var express = require('express')
var app = express()

app.use(express.static('../frontend-site/'));

app.listen(8080)