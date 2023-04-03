var mysql = require("mysql");

var db1 = mysql.createConnection({
  database: "job_board_sample_db",
  host: "localhost",
  user: "root",
  password: "password",
});

db1.connect(function (err) {
  if (err) throw err;
  console.log("Connected to sample DB!");
});

var db2 = mysql.createConnection({
  database: "job_board_prod_db",
  host: "localhost",
  user: "root",
  password: "password",
});

db2.connect(function (err) {
  if (err) throw err;
  console.log("Connected to production DB!");
});

let sql_create_employer =
  "CREATE TABLE Employer( \
          id INT AUTO_INCREMENT, \
          name VARCHAR(255), \
          employee_count VARCHAR(255), \
          revenue VARCHAR(255), \
          ownership_type VARCHAR(255), \
          city VARCHAR(255), \
          state VARCHAR(255), \
          PRIMARY KEY(id) \
      )";

// JobPosting table
let sql_create_job_posting =
  "CREATE TABLE JobPosting( \
          id INT AUTO_INCREMENT, \
          title VARCHAR(255), \
          employer_id INT, \
          description VARCHAR(550), \
          min_salary INT, \
          max_salary INT, \
          avg_salary INT, \
          city VARCHAR(255), \
          state VARCHAR(255), \
          rating DOUBLE, \
          PRIMARY KEY(id), \
          FOREIGN KEY (employer_id) REFERENCES Employer(id) \
      )";

// User table
let sql_create_user =
  "CREATE TABLE User( \
          id INT AUTO_INCREMENT, \
          username VARCHAR(255), \
          password VARCHAR(255), \
          name VARCHAR(255), \
          PRIMARY KEY(id) \
      )";

// Shortlist table
let sql_create_shortlist =
  "CREATE TABLE Shortlist( \
          user_id INT, \
          job_posting_id INT, \
          FOREIGN KEY (user_id) REFERENCES User(id), \
          FOREIGN KEY (job_posting_id) REFERENCES JobPosting(id) \
      )";

// reply table
let sql_create_reply =
  "CREATE TABLE Reply( \
          job_posting_id INT, \
          user_id INT, \
          reply_text VARCHAR(255), \
          timestamp TIMESTAMP, \
          FOREIGN KEY (job_posting_id) REFERENCES JobPosting(id), \
          FOREIGN KEY (user_id) REFERENCES User(id) \
      )";

// review table
let sql_create_review =
  "CREATE TABLE Review( \
        employer_id INT, \
        user_id INT, \
        review_text VARCHAR(255), \
        review_rating INT, \
        timestamp TIMESTAMP, \
        FOREIGN KEY (employer_id) REFERENCES Employer(id), \
        FOREIGN KEY (user_id) REFERENCES User(id) \
    )";

// Create all tables
const tables = [
  sql_create_employer,
  sql_create_job_posting,
  sql_create_user,
  sql_create_shortlist,
  sql_create_reply,
  sql_create_review,
];

for (let t in tables) {
  let table = tables[t];
  db1.query(table, (err) => {
    if (err) {
      throw err;
    }
  });
  db2.query(table, (err) => {
    if (err) {
      throw err;
    }
  });
}

setTimeout(() => {
  // Exit the program after the timer has elapsed
  process.exit();
}, 5000); // 5000 milliseconds = 5 seconds
