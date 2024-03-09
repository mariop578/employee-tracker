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

module.exports = allDep;
