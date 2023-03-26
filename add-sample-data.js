const fileName = "sample-data.csv";
const csvtojson = require('csvtojson');

csvtojson().fromFile(fileName).then(source => {
    // Fetching the data from each row and inserting to the table "products"
    for (var i = 0; i < 1; i++) {
        console.log(source[i]["Company Name"])
    }
});
