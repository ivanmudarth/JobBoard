const mysql = require('mysql')
const db = mysql.createConnection({
host: "localhost",
user: "root",
password: "password",
database:"job_board_app" 
})

module.exports = db;