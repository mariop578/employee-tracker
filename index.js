const inquirer = require("inquirer");
const [
  allDep,
  allEmployee,
  allRole,
  addDep,
  addRole,
  addEmployee,
  updateEmployeeRole,
] = require("./lib/queries");
// import mysql from "mysql2/promise";

const questions = [
  {
    type: "list",
    name: "menu",
    message: "What would you like to do?",
    choices: [
      "View all departments",
      "View all roles",
      "View all employees",
      // Inquirer separator are the lines that seperate the questions.
      new inquirer.Separator(),
      "Add a department",
      "Add a role",
      "Add an employee",
      "Update an employee role",
      new inquirer.Separator(),
      "Exit",
      new inquirer.Separator(),
    ],
  },
];

function init() {
  console.log(`+---------------------------------------------------------------------+
    |███████╗███╗   ███╗██████╗ ██╗      ██████╗ ██╗   ██╗███████╗███████╗|
    |██╔════╝████╗ ████║██╔══██╗██║     ██╔═══██╗╚██╗ ██╔╝██╔════╝██╔════╝|
    |█████╗  ██╔████╔██║██████╔╝██║     ██║   ██║ ╚████╔╝ █████╗  █████╗  |
    |██╔══╝  ██║╚██╔╝██║██╔═══╝ ██║     ██║   ██║  ╚██╔╝  ██╔══╝  ██╔══╝  |
    |███████╗██║ ╚═╝ ██║██║     ███████╗╚██████╔╝   ██║   ███████╗███████╗|
    |╚══════╝╚═╝     ╚═╝╚═╝     ╚══════╝ ╚═════╝    ╚═╝   ╚══════╝╚══════╝|
    |                                                                     |
    |████████╗██████╗  █████╗  ██████╗██╗  ██╗███████╗██████╗             |
    |╚══██╔══╝██╔══██╗██╔══██╗██╔════╝██║ ██╔╝██╔════╝██╔══██╗            |
    |   ██║   ██████╔╝███████║██║     █████╔╝ █████╗  ██████╔╝            |
    |   ██║   ██╔══██╗██╔══██║██║     ██╔═██╗ ██╔══╝  ██╔══██╗            |
    |   ██║   ██║  ██║██║  ██║╚██████╗██║  ██╗███████╗██║  ██║            |
    |   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝            |
    +---------------------------------------------------------------------+`);
  inquirer.prompt(questions).then((response) => {
    switch (response.menu) {
      case "View all departments":
        allDep();
        break;
      case "View all roles":
        allRole();
        break;
      case "View all employees":
        allEmployee();
        break;
      case "Add a department":
        addDep();
        break;
      case "Add a role":
        addRole();
        break;
      case "Add an employee":
        addEmployee();
        break;
      case "Update an employee role":
        updateEmployeeRole();
        break;
      case "Exit":
        process.exit(0);
        break;
    }
  });
}

init();
