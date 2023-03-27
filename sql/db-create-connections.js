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

// Create sample DB
let sql_create_sample_db = "CREATE DATABASE job_board_sample_db";
db.query(sql_create_sample_db, (err) => {
  if (err) {
    throw err;
  }
  console.log("Sample database created");
  exit_2 = true 
});

// Create production DB
let sql_create_prod_db = "CREATE DATABASE job_board_prod_db";
db.query(sql_create_prod_db, (err) => {
  if (err) {
    throw err;
  }
  console.log("Production database created");
  exit_3 = true 
});

setTimeout(() => {
  process.exit();
}, 3000); 