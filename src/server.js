var express = require('express');
var path = require("path");

var app = express();

// app.get('/', function (req, res) {
//   res.send('中国三河马');
// });

app.use(express.static(path.join("./build")));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
