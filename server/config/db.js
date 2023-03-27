const mysql = require('mysql')
const db = mysql.createConnection({
host: "localhost",
user: "root",
password: "password",
database:"job_board_prod_db" 
})

module.exports = db;