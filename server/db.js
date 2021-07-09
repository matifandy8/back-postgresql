const Pool = require("pg").Pool;

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "5gv1qld2782uaxxb",
  port: 5432,
  database: "postgres",
});

module.exports = pool;
