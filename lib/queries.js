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
        if (error) {
          console.log(error);
        }
        console.log("Added Department :  " + response.dep_name);
      }
    );
  } catch (err) {
    console.log(err);
  }
}

async function addRole() {
  try {
    const response = await inquirer.prompt([
      {
        name: "role_title",
        type: "input",
        message: "What is the name of the Role?",
      },
      {
        name: "role_salary",
        type: "input",
        message: "What is the salary of the Role?",
      },
      {
        name: "department_id",
        type: "input",
        message: "What is the department of the Role?",
      },
    ]);
    const insertQuery =
      "INSERT INTO role (title, salary, department_id) VALUES (?,?,?)";
    const results = await connection.query(
      insertQuery,
      [response.role_title, response.role_salary, response.department_id],
      (error, result) => {
        if (error) {
          console.log(error);
        }
        console.log("Added Role :  " + response.role_title);
      }
    );
  } catch (err) {
    console.log(err);
  }
}

async function addEmployee() {
  try {
    const response = await inquirer.prompt([
      {
        name: "first_name",
        type: "input",
        message: "What is the first name ?",
      },
      {
        name: "last_name",
        type: "input",
        message: "What is the last name ?",
      },
      {
        name: "role_id",
        type: "input",
        message: "What is the role ID ?",
      },
      {
        name: "manager_id",
        type: "input",
        message: "What is the manager ID ?",
      },
    ]);
    const insertQuery =
      "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)";
    const results = await connection.query(
      insertQuery,
      [
        response.first_name,
        response.last_name,
        response.role_id,
        response.manager_id,
      ],
      (error, result) => {
        if (error) {
          console.log(error);
        }
        console.log(
          "Added Employee :  " + response.first_name + response.last_name
        );
      }
    );
  } catch (err) {
    console.log(err);
  }
}

async function updateEmployeeRole() {
  try {
    const response = await inquirer.prompt([
      {
        name: "employeeName",
        type: "input",
        message: "Which Employee would you like to update?",
      },
      {
        name: "role",
        type: "input",
        message: "What is the new role id?",
      },
    ]);

    const updateQuery =
      "UPDATE employee SET role_id = ? WHERE CONCAT(first_name, ' ', last_name) = ?";
    connection.query(
      updateQuery,
      [response.role, response.employeeName],
      (error, results) => {
        if (err) {
          console.log(err);
        }
        console.log(
          "Updated " +
            response.employeeName +
            " To the role id of " +
            response.role
        );
      }
    );
  } catch (error) {
    console.log(error);
  }
}

module.exports = [
  allDep,
  allEmployee,
  allRole,
  addDep,
  addRole,
  addEmployee,
  updateEmployeeRole,
];
