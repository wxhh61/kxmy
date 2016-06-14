var express = require('express');
var path = require("path");
var favicon = require('serve-favicon');

var app = express();


app.use(express.static(path.join("./build")));
app.use(favicon(path.join('./src/public/favicon.ico')));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
