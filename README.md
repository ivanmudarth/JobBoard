# Job Board App 
### CS 348

The project currently has Feature 4 implemented which is displaying all of the jobs in our databse and being able to filter the jobs by parameters. 

![IMG_2854](https://user-images.githubusercontent.com/30390967/223331565-c62671f3-4e24-4153-befd-5a6c2cdeda99.jpg)

<details>
<summary>How to run the project</summary>

To set up the client, navigate to `/client` and run `npm install` to install required dependencies. Then run the web app using `npm start`.
  
The server (which the client depends on) can be started by running `node Server/index.js`.
  
</details>

<details>
<summary>How to create and load sample database</summary>
<br />

In ```create-tables.js``` we create and connect to our local databse naming it ```job_board_app``` -- CHANGE THIS 

<br />
The process of populating the database with our sample data starts from a CSV file which we imported using the “Table Data Import Wizard” on MySQL Workbench. This tool allows us to select which fields in our MySQL tables we want to populate with CSV data. By the end we filled our Employer, Industry, and JobPosting tables with data from these 30 entries. 

</details>

<details>
<summary>SQL Code</summary>
<br />
In job-board-app/sql you can find all the sql code used to setup the databse. 

- db-create-connections.js creates a connection to the databse and then creates two databases: ```job_board_sample_db``` and ```job_board_prod_db``` for sample data and production data respectively. 
```
  host: "localhost",
  user: "root",
  password: "password"
```
- db-create-tables.js creates the tables for both databases 
- db-add-data.js parses through the two data csv files (sample,prod) and adds the data to both databses respectively 

</details>

<details>
<summary>Sample Tests</summary>
<br />

The queries mentioned in the Report for sample data are seen in ```job-board-app/tests/sampledata/test-sample.sql``` and the output is displayed in ```job-board-app/tests/sampledata/test-sample.out```

</details>


<details>
<summary>Feature Tests on Production</summary>
<br />

The queries & ouput mentioned in the Report for production data are grouped by feature in ```job-board-app/tests``` 

</details>







