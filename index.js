
var express = require('express');

var app = express();

app.get('/', function (req, res) {
  res.send({name:"Pikachu", type:"Electric"});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});