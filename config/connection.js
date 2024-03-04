// Get the client
const mysql = require("mysql2/promise");
require("dotenv").config();
// import mysql from "mysql2/promise";

// Create the connection to database
const connection = mysql.createConnection({
  host: process.env.HOST,
  user: "root",
  database: process.env.DB_NAME,
});

module.exports = connection;
