var express = require("express");
//import express from "express";
var app = express();

// viewed at http://localhost:8080
app.get("/", function (req, res) {
	res.send("Hello world");
});

app.get("/posts", function (req, res) {
	res.send("Hello you");
});

app.listen(8080, "Hello-me");
