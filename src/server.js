var express = require('express');
var path = require("path");
var favicon = require('serve-favicon');
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport('smtps://xiaw61%40gmail.com:17013249xwgXWG@smtp.gmail.com');

var app = express();


var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

var mailOptions = {
    from: '"Weiguo Xia" <xiaw61@gmail.com>', // sender address
    to: 'ewkkxmy@163.com', // list of receivers
    subject: '网友留言'
};


app.post('/', function(req, res){
  mailOptions["text"] = JSON.stringify(req.body);
  transporter.sendMail(mailOptions, function(error, info){
    if(error){
      return console.log(error);
    }
    console.log('Message sent: ' + info.response);
  });
  res.send(req.body);
});


app.use(express.static(path.join("./build")));
app.use(favicon(path.join('./src/public/favicon.ico')));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
