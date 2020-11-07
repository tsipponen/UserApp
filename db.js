var mongoose = require("mongoose");
const uri = "mongodb+srv://tiny:<password>@tinycluster.6gq7r.azure.mongodb.net/<dbName>?retryWrites=true&w=majority";

mongoose.connect(uri, {useNewUrlParser: true});
