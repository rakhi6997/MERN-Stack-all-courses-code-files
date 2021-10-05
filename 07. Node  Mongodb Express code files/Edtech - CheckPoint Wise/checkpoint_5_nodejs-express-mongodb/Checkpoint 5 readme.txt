-- Check point 5 --- Reference Chapter 8 ---
-- This is very critical phase of the project. 

1.  We would now add code to server.js file. 
a. Load express and create an express app object.
b. Load the body-parser module , so that we can read request.body parameters from an HTTP POST request. 
c. Load cors module. Please note that our node-express apis are going to be called from React or POSTMAN or Swagger. CORS allows another application to call our apis.

d. Set the default route for the index or root path i.e /
Something like :
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Upgrad InSession application development." });
});

e. Set the PORT and start the server ( i.e LISTEN on PORT for request )

> Refer server.js 


2. Code the app/controllers/tutorial.controller.js for following api's
create() - to create and save the course. 
findAllTitle() - to search the course by title.
findAllCategory() - to search the course by category.
findOne() - to fetch all details of a course given its _id.
update() - to update one or more details of a course given its _id.
delete() - to delete a course given its _id.
deleteAll() - to delete all courses.
findAllPublished() - to fetch all Courses with published parameter as true.
 

> Refer app/controllers/tutorial.controller.js


3. Code the app/controllers/user.controller.js for following api's

signUp() - to create a USER object and save it in USER schema.
login() - to check the entered email_id and password is matching with data in USER schema. If yes , then the person has loggedIn.
logout() - This requires the unique Id of the logged in person. His loggedIn status is set to false. 

> Refer app/controllers/user.controller.js


4. Code the app/controllers/enrollment.controller.js for only one api

enroll - to create an entry of an user and the course enrolled into. Here we would accept 2 unique Ids - namely courseId and userId. 

 
 