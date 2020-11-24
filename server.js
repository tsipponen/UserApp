var connection = require("./app");
var express = require("express");

var app = express();
var port = process.env.PORT || 3000;

var userController = require("./UserController");
app.use("/users", userController);

connection.runApp().then((result) => {
  var server = app.listen(port, function (){
    console.log(`Express server listening on port ${port}.`)
  })
});
