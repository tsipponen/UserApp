 var auth = require("./auth.js");

auth.getConnectionInfo().then((result) => {(username, password, dbname)

    var express = require("express");
    var app = express();
    var db = require("./db");

    var userController = require("./UserController");
    app.use("/users", userController);
    module.exports = app(username, password, dbname);
});
