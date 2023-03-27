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
<summary>Creating Tables</summary>
<br />
Tables for each entity in our Data Relational Model is created in ```create-tables.js```.

</details>

<details>
<summary>Sample Tests</summary>
<br />

The queries mentioned in Milestone 1 Report are seen in ```test-sample.sql``` and the output is displayed in ```test-sample.out```

</details>









