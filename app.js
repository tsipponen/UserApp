var auth = require("./auth.js");

module.exports = {
    runApp: async() => {
        await auth.getConnectionInfo().then((result) =>{
            var db = require("./db");

            try{
                db.connectToDb(result.username, result.password, result.dbname);
            }
            catch(e){
                console.trace(e);
            }
            return db;
        })
    }
};
