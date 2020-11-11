module.exports.connectToDb = function(username, password, dbname){
    console.log(`Before require.`);
    var mongoose = require("mongoose");
    console.log(`After require.`);
    const uri = `mongodb+srv://${username}:${password}@tinycluster.6gq7r.azure.mongodb.net/${dbname}?retryWrites=true&w=majority`;
    mongoose.connect(uri, {useNewUrlParser: true});
}
