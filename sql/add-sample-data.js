const fileName = "sample-data.csv";
const csvtojson = require('csvtojson');

csvtojson().fromFile(fileName).then(source => {
    // Fetching the data from each row and inserting to the table "products"
    for (var i = 0; i < 1; i++) {

        // Employer 
        const name = source[i]["Company Name"];
        const employee_count = source[i]["Size"]
        const revenue = source[i]["Revenue"]
        const ownership_type = source[i]["Type of ownership"]
        const city = source[i]["Employer City"]
        const state = source[i]["Employer State"]


        // Job Posting
        const title = source[i]["Job Title"]
        const minSal = source[i]["min_salary"]
        const maxSal = source[i]["max_salary"]
        const avgSal = source[i]["avg_salary"]
        const city_job = source[i]["Job City"]
        const state_job = source[i]["Job State"]
        const rating = source[i]["Rating"]

    }
});
