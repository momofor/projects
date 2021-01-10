var express = require("express");
var app = express();
var mongoose = require("mongoose");

// viewed at http://localhost:8080
app.get("/", function (req, res) {
	res.send("Hello world");
});

app.get("/posts", function (req, res) {
	res.send("Hello you");
});

app.listen(8080);
