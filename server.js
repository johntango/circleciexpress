var express = require('express');
var exampleRouter = require("./example-router");
var app = express();

app.use("/example", exampleRouter);

app.get('/', function (req, res) {
    res.send('<p>Hello World! Hello Earthling, Hello Everybody!</p><br><p>P.S. Major Tom</p>');
});
app.listen(8080);
console.log("Application Running on port 8080");
alert("Application Running On Port 8080");