var express = require("express");
var app = express();
var db = require("./db");

var userController = require("./UserController");
app.use("/users", userController);
module.exports = app;
