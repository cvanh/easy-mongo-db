// exports.Inserts = require("./lib/Inserts.js");
// exports.DatabaseCore = require("./lib/DatabaseCore");

const Inserts = require("./lib/Inserts");
const Update = require("./lib/Update")

class DatabaseCore{
    constructor(){
        console.log("database core loaded");

        this.Inserts = new Inserts()

        this.Update = new Update()
    }
    function kaas() {
        const MongoClient = require("mongodb").MongoClient;
// Connection URI
require("dotenv").config({
  path: "../.env",
});
const uri = process.env.DB_URL;
const client = new MongoClient(uri, {
  useUnifiedTopology: true,
});

const connection = client.connect();
const connect = connection;

const dbo = client.db("discord");

    }
    
}

module.exports = DatabaseCore