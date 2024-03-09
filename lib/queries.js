// queries.js
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

module.exports = [allDep, allEmployee, allRole];
