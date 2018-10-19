var express = require('express');

var app = express();
app.get('/', function(req, res) {
    var num = Math.floor(Math.random() * 10);
    res.send('My lucky number =  ' + num);
});

app.listen(80);
console.log("Running on port 80");
