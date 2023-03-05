const express = require("express");

const mysql = require("mysql");

// Create connection
const db = mysql.createConnection({
  database: "job_board_app",
  host: "localhost",
  user: "root",
  password: "password",
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("MySql Connected");
});

// const app = express();

// Create DB
// let sql_create_db = "CREATE DATABASE job_board_app";
// db.query(sql_create_db, (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("Database created");
// });


// Create employer
// let sql_create_employer =
//   "CREATE TABLE employer( \
//         id int AUTO_INCREMENT, \
//         name VARCHAR(255), \
//         employee_count VARCHAR(255), \
//         revenue VARCHAR(255), \
//         ownership_type VARCHAR(255), \
//         city VARCHAR(255), \
//         state VARCHAR(255), \
//         PRIMARY KEY(id) \
//     )";

// db.query(sql_create_employer, (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("Employer table created");
// });

// Create job_posting
let sql_create_job_posting =
  "CREATE TABLE job_posting( \
        id int AUTO_INCREMENT, \
        title VARCHAR(255), \
        description VARCHAR(255), \
        employer_id int, \
        min_salary int, \
        max_salary int, \
        avg_salary int, \
        city VARCHAR(255), \
        state VARCHAR(255), \
        rating double, \
        PRIMARY KEY(id), \
        FOREIGN KEY (employer_id) REFERENCES employer(id) \
    )";

db.query(sql_create_job_posting, (err) => {
  if (err) {
    throw err;
  }
  console.log("Job posting table created");
});

