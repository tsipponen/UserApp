var auth = require("./auth.js");

auth.getConnectionInfo().then((result) => {

    var db = require("./db");

    try{
        db.connectToDb(result.username, result.password, result.dbname);
    }
    catch(e){
        console.trace(e);
    }
});
