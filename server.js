var express = require('express');
var exampleRouter = require("./example-router");
var app = express();

app.use("/example", exampleRouter);

app.get('/', function (req, res) {
    res.send('Hello Worlds!');
});
app.listen(8080);
console.log("Running on port 8080");