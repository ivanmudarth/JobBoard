# Job Board App 
### CS 348

The project currently has Feature 1, 3 and 4 implemented. To test each feature, look for "How to Test" section for all 3 features. 

![IMG_2854](https://user-images.githubusercontent.com/30390967/223331565-c62671f3-4e24-4153-befd-5a6c2cdeda99.jpg)

<details>
<summary>How to run the project</summary>

<br />

Before you begin, the project is currently set to run the production dataset. If you wish to run it with the sample data, go to ```job-board-app/server/config/db.js``` and replace line 6 with ```database:"job_board_sample_db"```.

Firstly, in the root directory, run `npm install` to install required dependencies.

Next, you need to set up the databse. Navigate to `/sql` and run the following one after another. Note: each file will run for a few seconds. A description for what each file does is found in SQL Code section of ReadMe. 
```
node db-create-connections.js
node db-create-tables.js   
node db-add-data.js     
```

Now set up the server. The server (which the client depends on) can be started by running `node Server/index.js`.

To set up the client, navigate to `/client` in another terminal and run `npm install` to install required dependencies. Then run the web app using `npm start`.
  
</details>

<details>
<summary>How to create and load sample and production database</summary>
<br />
To create and load sample and production databse, navigate to `/sql` and run the following one after another. 
```
node db-create-connections.js
node db-create-tables.js   
node db-add-data.js     
```

- db-create-connections.js creates a connection to the databse and then creates two databases: ```job_board_sample_db``` and ```job_board_prod_db``` for sample data and production data respectively. 
- db-create-tables.js creates the tables for both databases 
- db-add-data.js parses through the two data csv files (sample,prod) and adds the data to both databses respectively 

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







