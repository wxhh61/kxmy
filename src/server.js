var express = require('express');
var path = require("path");
var favicon = require('serve-favicon')


var app = express();


var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


app.post('/', function(req, res){
  console.log(req.body);
  res.send(req.body);
});


app.use(express.static(path.join("./build")));
app.use(favicon(path.join('./src/public/favicon.ico')));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
