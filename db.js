//var mongoose = require("mongoose");
//mongoose.connect("mongodb://127.0.0.1:27017/users", { useNewUrlParser: true });
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://tiny:<password>@tinycluster.6gq7r.azure.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, {userNewUrlParser:true});

client.connect(err => {
    const collection = client.db("test").collection("devices");
    //perform actions to the collection objects
    client.close();
})
