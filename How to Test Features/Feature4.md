### How to test Feature 4: Filter

To test this feature, once the app is launched, sign in to an account (sign up for an account if you dont have one).

From there you will be taken the Home page. Navigate to the job filter page by clicking on Filter in the Nav bar on the top and see all the jobs in the databse

![Screen Shot 2023-03-27 at 9 42 26 PM](https://user-images.githubusercontent.com/33183884/228105177-ca1e308e-ba6e-4a05-a300-1330a43738cd.png)

From here, you have the option to filter all the jobs in the database based on several parameters. To filter by a parameter, simply type in appropriate text field. You can use zero to all parameters. 

Once you have filled in the desired text fields, click the submit button. Within a few moments you should see all the job postings that fit the parameters. 

![Screen Shot 2023-03-27 at 9 53 56 PM](https://user-images.githubusercontent.com/33183884/228106573-47aad87b-6cff-44cc-8a9c-867f857711cd.png)

To ensure the feature is working, you can check that all the fields you filled in match with the results returned in the table. For example, if you type in 3 to the "Rating" field, then all job postings you see should have a rating >= 3.

Next to each entry in the table is a "View" button. When clicked it will display the corresponding job posting in a new page with more information. To ensure this is working, the values you table entry should correspond with those in the new page that is opened when you click "View."

If no jobs match your filter, you should see the "No jobs founds..." message:

![Screen Shot 2023-03-27 at 9 59 50 PM](https://user-images.githubusercontent.com/33183884/228107454-d801bc79-84c4-41cc-9367-a86c22b2c536.png)
