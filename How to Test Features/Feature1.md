### How to test Feature 1: User Authentication

When you first launch the app you will be taken to the landing page and should see the following

<img width="737" alt="image" src="https://user-images.githubusercontent.com/30390967/228073045-b5aa4f83-a3ed-41bb-b541-601f8b292448.png">

Here if you click the "Sign up" Button you will be taken to the sign up page. 

<img width="1464" alt="image" src="https://user-images.githubusercontent.com/30390967/228073251-04fccc02-abdf-401b-b5c2-c754fdc613a2.png">

Clicking on the "Login" button on the bottom will take you back to Login page. Here you can enter a username and password that is not in the databse and click "Sign In" and an error will be presented to you.

To test this feature now, go to the Sign up page, and enter a Name, Username, and Password. Click "Sign Up" and it should take you to the Home Page. 

<img width="1470" alt="image" src="https://user-images.githubusercontent.com/30390967/229636103-15e8a1b3-e51d-4cef-b718-c7ebae763eb8.png">

On the Home page you will see your name and username.

To verify this, if you look in the User table, you should see the new user you just created and the id should match up with the url of the page you are taken to: http://localhost:3000/filter/:{id}.

For example if this was the first user you signed up, the url of the page should be http://localhost:3000/filter/1 

Now we can test the sign in functionality. Click the Log out button on the top nav bar. 

From here, you can test this by inputing the username and password of the user you just created. This should again navigate you to the Home page and the url should once again match the id of the current user's id as seen in the User table. 

This id is used in other pages of the application to identify which user is logged for instance this is seen in the Replies feature. 
