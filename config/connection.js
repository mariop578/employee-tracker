// connection.js
const mysql = require("mysql2");
require("dotenv").config();

const connection = mysql.createConnection({
  host: process.env.HOST,
  user: "root",
  database: process.env.DB_NAME,
});

module.exports = connection.promise(); // Use promise() to enable async/await with execute
