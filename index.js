// exports.Inserts = require("./lib/Inserts.js");
// exports.DatabaseCore = require("./lib/DatabaseCore")
const MongoClient = require("mongodb").MongoClient;


const Bulk = require("./lib/Bulk");
const Inserts = require("./lib/Inserts");
const Update = require("./lib/Update")

class DatabaseCore {
    Database
    MongoUrl
    constructor(Database,MongoUrl,Client) {
        console.log("database core loaded");

        // init for mongo db 
        this.Database = Database
        this.MongoUrl = MongoUrl

        // creates the mongodb procces
        this.client = new MongoClient(this.MongoUrl, {useUnifiedTopology: true});
        this.connection = this.client.connect()
        this.dbo = client.db("test")

        // loads all the sub classes for the package
        this.Inserts = new Inserts()
        this.Update = new Update()
        this.Bulk = new Bulk()
    }



}

module.exports = DatabaseCore