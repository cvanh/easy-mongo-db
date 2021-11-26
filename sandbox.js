const easyMongoDB = require("./index.js")

const DB = new easyMongoDB("database","url")

DB.Inserts.one()
DB.Update.one()