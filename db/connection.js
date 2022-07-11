const mysql2 = require("mysql2");
require("dotenv").config()

const db = mysql2.createConnection(
    {
        host: "localhost",
        user: "root",
        password: process.env.PASSWORD,
        database:"employees",
    },
    console.log("Connected to the employee database")
);

module.exports = db