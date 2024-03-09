const inquirer = require("inquirer");
const allDep = require("./lib/queries");
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
    if (response.menu === "View all departments") {
      allDep();
    }
  });
}

init();
