require("dotenv").config({
    path: ".env",
});

const DatabaseCore = require("./index.js")

const DB = new DatabaseCore("test",process.env.db_url)

DB.Inserts.one()
// DB.Update.one()