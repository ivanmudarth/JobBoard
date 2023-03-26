var mysql = require('mysql');

var exit_1 = false 
var exit_2 = false


var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password"
});

db.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  exit_1 = true 
});

// Create DB
let sql_create_db = "CREATE DATABASE job_board_app_10";
db.query(sql_create_db, (err) => {
  if (err) {
    throw err;
  }
  console.log("Database created");
  exit_2 = true 
});


setTimeout(() => {
  process.exit();
}, 3000); 