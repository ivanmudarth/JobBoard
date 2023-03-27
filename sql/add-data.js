const fileName = "sampledata.csv";
const csvtojson = require('csvtojson');
const { title } = require('process');
var mysql = require('mysql');

csvtojson().fromFile(fileName).then(source => {

    var db = mysql.createConnection({
        database: "job_board_sample_db",
        host: "localhost",
        user: "root",
        password: "password"
      });

    // Fetching the data from each row and inserting to the table "products"
    for (var i = 0; i < source.length; i++) {

        // Employer 
        const name = source[i]["Company Name"];
        const employee_count = source[i]["Size"]
        const revenue = source[i]["Revenue"]
        const ownership_type = source[i]["Type of ownership"]
        const city = source[i]["Employer City"]
        const state = source[i]["Employer State"]
        const industry = source[i]["Industry"]
        const desc = source[i]["Job Description"].substring(0, 550);

        // Job Posting
        const title = source[i]["Job Title"]
        const minSal = source[i]["min_salary"]
        const maxSal = source[i]["max_salary"]
        const avgSal = source[i]["avg_salary"]
        const city_job = source[i]["Job City"]
        const state_job = source[i]["Job State"]
        const rating = source[i]["Rating"]


        var insertStatement = `INSERT INTO Employer (name, employee_count, revenue, ownership_type, city, state) VALUES ('${name}', '${employee_count}', '${revenue}', '${ownership_type}', '${city}', '${state}')`;
        // var items = [name, employee_count, revenue, ownership_type, city, state];

        db.query(insertStatement, 
            (err, results, fields) => {
            if (err) {
                console.log("Unable to insert item at row ", i + 1);
                return console.log(err);
            }
        });

        var insertStatement = `INSERT INTO Industry (employer_id, industry_name) VALUES (LAST_INSERT_ID(), '${industry}')`;

        db.query(insertStatement, 
            (err, results, fields) => {
            if (err) {
                console.log("Unable to insert item at row ", i + 1);
                return console.log(err);
            }
        });


        var insertStatement = (`INSERT INTO JobPosting (title, employer_id, description, min_salary, max_salary, avg_salary, city, state, rating) VALUES (?,LAST_INSERT_ID(),?,?,?,?,?,?,?)`);

        db.query(insertStatement, [title,desc,minSal,maxSal,avgSal,city,state,rating], 
            (err, results, fields) => {
            if (err) {
                console.log("Unable to insert item at row ", i + 1);
                return console.log(err);
            }
        });
    }

    console.log("Records inserted into database successfully...!!");
});

setTimeout(() => {
    process.exit();
  }, 3000); 
