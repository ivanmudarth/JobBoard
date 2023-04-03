### How to test Feature 6: Employer Reviews

To test this feature, once the app is launched, sign in to an account (sign up for an account if you dont have one). 

From there you will be taken the Home page. Navigate to the job filter page by clicking on Filter in the Nav bar on the top and see all the jobs in the databse. 

<img width="1461" alt="image" src="https://user-images.githubusercontent.com/30390967/228078596-ffcc601c-7e08-41c8-87f9-f7475663389a.png">

From here click on the "View" button next to any job which will take you to a detail page for that job. 

<img width="1470" alt="image" src="https://user-images.githubusercontent.com/30390967/229640064-86d01487-dd23-4993-85fa-dbd6290d9f9d.png">

Click on the Employer name, under the title (INFICON) which will take you to the Employer detail page. 

<img width="1468" alt="image" src="https://user-images.githubusercontent.com/30390967/229640085-670aec35-e202-45a8-bf6c-d183c6d2f537.png">

Here you should see details about the Employer. On the bottom you should also see that there are no reviews for this employer: "No reviews posted..." 

Once here, to test this feature, you can click on the textfield on the bottom of the page labeled "Post a review" and type in a review. Select a number on the dropdown and once you click the "Post" button you will now see your review listed under the job along with your used id and the timestamp of your review.

<img width="1470" alt="image" src="https://user-images.githubusercontent.com/30390967/229640347-72d6738d-5893-4c28-a6ca-8a9dc7ea0e83.png">

There are two ways to verify the queries of this feature. Firstly you can check if the review you made is inserted accuretly into the Review table. You can also verify that these reviews are seen by logging into a new account and clicking on the same job > Employer you posted a review on. Here you should see the previous reviews made by the other accounts. 
