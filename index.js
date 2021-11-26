// exports.Inserts = require("./lib/Inserts.js");
// exports.DatabaseCore = require("./lib/DatabaseCore")
require("dotenv").config({
    path: "../.env",
});

const Bulk = require("./lib/Bulk");
const Inserts = require("./lib/Inserts");
const Update = require("./lib/Update")

class DatabaseCore {
    Database
    MongoUrl
    constructor(Database,MongoUrl) {
        console.log("database core loaded");

        // init for mongo db 
        this.Database = Database
        this.MongoUrl = MongoUrl

        // loads all the sub classes for the package
        this.Inserts = new Inserts()
        this.Update = new Update()
        this.Bulk = new Bulk()
    }

    kaas() {
        const MongoClient = require("mongodb").MongoClient;
        // Connection URI
        const uri = process.env.DB_URL;
        const client = new MongoClient(uri, {
            useUnifiedTopology: true,
        });

        const connection = client.connect();
        // const connect = connection;

        const dbo = client.db("discord");
        return connection
    }

}

module.exports = DatabaseCore