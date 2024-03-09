// queries.js
const inquirer = require("inquirer");
const connection = require("./../config/connection");

async function allDep() {
  try {
    const [results, fields] = await connection.execute(
      "SELECT * FROM department"
    );
    console.table(results);
  } catch (err) {
    console.error(err);
  }
}

async function allEmployee() {
  try {
    const [results, fields] = await connection.execute(
      "SELECT * FROM employee"
    );
    console.table(results);
  } catch (err) {
    console.error(err);
  }
}

async function allRole() {
  try {
    const [results, fields] = await connection.execute("SELECT * FROM role");
    console.table(results);
  } catch (err) {
    console.error(err);
  }
}

async function addDep() {
  try {
    const response = await inquirer.prompt([
      {
        name: "dep_name",
        type: "input",
        message: "What is the name of the Department?",
      },
    ]);
    const insertQuery = "INSERT INTO department (name) VALUES (?)";
    const results = await connection.query(
      insertQuery,
      [response.dep_name],
      (error, result) => {
        if (err) {
          console.log(err);
        }
        console.log("Added Department :  " + response.dep_name);
      }
    );
  } catch (err) {
    console.log(err);
  }
}

module.exports = [allDep, allEmployee, allRole, addDep];
