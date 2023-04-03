### How to test Feature 5: Posting Jobs

To test this feature, once the app is launched, sign in to an account (sign up for an account if you dont have one). 

From there you will be taken the Home page. Navigate to the Job posting page by clicking on "Post job" in the Nav bar on the top.

<img width="1470" alt="image" src="https://user-images.githubusercontent.com/30390967/229636888-688d509c-a691-4f5b-afa7-9ab0052248e7.png">

Now click on the " New Employer? Get Employee ID" Button on the top right. Here you can create a new employer by entering the following information: Name, Employee count, Revenue count, Ownership type, City, State. 

<img width="1469" alt="image" src="https://user-images.githubusercontent.com/30390967/229637407-e3e7d799-82b3-4f17-bddc-6e25439bba87.png">


When you click submit you should see that a new number is automatically inserted in the "Employer ID" field. This is the employer_id that was just created for the Employer you made. 

Now you can enter the rest of the details for the new job you want to add and click submit. This will add the job to our JobPosting table. 

<img width="1470" alt="image" src="https://user-images.githubusercontent.com/30390967/229637484-e5875751-1a1f-4e80-8cda-605a11e1725d.png">

To verify, go to the filter page and you can see the job at the bottom of the list or you can filter for the specific job: 

<img width="1468" alt="image" src="https://user-images.githubusercontent.com/30390967/229637572-920231eb-59f9-4d16-9cec-bd8dde2f0d8c.png">

Furthermore, you can verify this by going into the JobPosting table and checking that the new job you added was inserted and the new employer (if you made new one) is added to the Employer table. 
