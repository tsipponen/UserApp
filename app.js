var auth = require("./auth.js");

auth.getConnectionInfo().then((result) => {

    var express = require("express");
    var app = express();
    var db = require("./db");

    var userController = require("./UserController");
    app.use("/users", userController);

    try{
        db.connectToDb(result.username, result.password, result.dbname);
    }
    catch(e){
        console.trace(e);
    }
});
