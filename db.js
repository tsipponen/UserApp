module.exports.connectToDb = function(username, password, dbname){
    console.log(`Connecting to database ${dbname} as ${username}...`);
    var mongoose = require("mongoose");
    const uri = `mongodb+srv://${username}:${password}@tinycluster.6gq7r.azure.mongodb.net/${dbname}?retryWrites=true&w=majority`;
    mongoose.connect(uri, {useNewUrlParser: true});
}
