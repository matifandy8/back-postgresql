const Pool = require("pg").Pool;

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "yacuy1647",
  port: 5432,
  database: "jwttutorial",
});

module.exports = pool;
