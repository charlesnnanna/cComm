const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "metaphor",
    host : "localhost",
    port : "5432",
    databas: "cComm"
})

module.exports = pool;  