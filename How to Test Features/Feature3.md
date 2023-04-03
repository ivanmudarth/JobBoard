### How to test Feature 3: Replies

To test this feature, once the app is launched, sign in to an account (sign up for an account if you dont have one). 

From there you will be taken the job filter page and see all the jobs in the databse. 

<img width="1461" alt="image" src="https://user-images.githubusercontent.com/30390967/228078596-ffcc601c-7e08-41c8-87f9-f7475663389a.png">

From here click on the "View" button next to any job which will take you to a detail page for that job. 
<img width="736" alt="image" src="https://user-images.githubusercontent.com/30390967/228078835-33ef6865-de65-4437-a29e-7f2f208f9d0a.png">

> Here you can see that if there are no replies for this given job, it will say "No replies posted..." on the bottom of the page. 

Once here, to test this feature, you can click on the textfield on the bottom of the page labeled "Post a reply" and type in a reply. Once you click the "Post" button you will now see your reply listed under the job along with your used id and the timestamp of your reply. 

You can write multiple replies and see them stacked on top of each other ordered by time. 

<img width="1468" alt="image" src="https://user-images.githubusercontent.com/30390967/228079283-93e77a69-c41e-4509-8ea7-1390bf3ec3d3.png">

There are two ways to verify the queries of this feature. Firstly you can check if the reply you made is inserted accuretly into the Reply table. You can also verify that these replies are seen by logging into a new account and clicking on the same job you posted a reply on. Here you should see the previous replies made by the other account. 
