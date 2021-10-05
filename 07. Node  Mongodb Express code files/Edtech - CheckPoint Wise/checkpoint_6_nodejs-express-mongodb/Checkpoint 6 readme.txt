-- Check point 6 --- Reference Chapter 9 ---
-- This is final phase of the project. 

1. Code the routes file app/routes/tutorial.routes.js.  Follow the routes and methods as discussed and decided in the Project checkpoint 2 ( Can refer the notes - Chapter 9 )

2. Code the routes file app/routes/user.routes.js.  Follow the routes and methods as discussed and decided in the Project checkpoint 2 ( Can refer the notes - Chapter 9 )

2. Code the routes file app/routes/enrollment.routes.js.  Follow the routes and methods as discussed and decided in the Project checkpoint 2 ( Can refer the notes - Chapter 9 )


3. Run the app as 
ProjectFolderPath> node server

4. Open Compass. The GUI for MongoDB. 

5. First test the User Api's through Swagger or POSTMAN. 

> for Signup

Method : POST 
URL -> http://localhost:3000/api/sign-up
body -> {
      "firstName" : "Prachi",
	  "lastName" : "Agarwal",
	  "email" : "prachi@somemail.com",
      "password" : "prachi1234",
      "role" : "user"
}

return value -> {
    "role": "user",
    "_id": "6069b434e81fc334e8c7b8d3",
    "email": "prachi@somemail.com",
    "password": "prachi1234",
    "isLoggedIn": true,
    "createdAt": "2021-04-04T12:42:28.574Z",
    "updatedAt": "2021-04-04T12:42:28.574Z",
    "__v": 0
}
---------------

> for Login

Method : POST 
URL -> http://localhost:3000/api/login
body -> {
     "email": "prachi@somemail.com",
    "password": "prachi1234"
}

return value -> {
    "role": "user",
    "_id": "6069b434e81fc334e8c7b8d3",
    "email": "prachi@somemail.com",
    "password": "prachi1234",
    "isLoggedIn": true,
    "createdAt": "2021-04-04T12:42:28.574Z",
    "updatedAt": "2021-04-04T12:42:28.574Z",
    "__v": 0
}


---------------

> for Logout

Method : POST 

URL -> http://localhost:3000/api/logout
body -> {
      "id": "60962a036ee6df27080484ce"
}


return value -> {
    "message": "Logged Out successfully."
}

Note : Check at back end the isLoggedIn attribute is reset to FALSE

---------------


6. Test the Course Creation and Management API's of the project. 


> Create a new Tutorial using POST /tutorials Api

method 	: POST   
URL 	: http://localhost:3000/api/tutorials/
body -> {
"title" : "DevOps and javascript",
"description" : "Table of contents - Primary Topics",
"skills" : "HTML, CSS, and more",
"chapters" : "Chapter 1 , Chapter 2",
"published" : true,
"category" : "DevOps",
"priceInRupees" :  "5000",
"priceAfterDiscount" : "4000"
}

return value -> {
    "priceInRupees": 5000,
    "imageURL": "https://ik.imagekit.io/upgrad1/marketing-platform-assets/meta-images/home.jpg",
    "videoURL": "https://www.youtube.com/watch?v=MTdpHs6HWwM",
    "notesURL": "https://www.mongodb.com/mern-stack",
    "duration": 60,
    "popularity": 4,
    "_id": "6069aa1be81fc334e8c7b8d0",
    "title": "AJAX and javascript- advanced",
    "description": "Table of contents - Primary Topics",
    "published": true,
    "category": "DevOps",
    "createdAt": "2021-04-04T11:59:23.696Z",
    "updatedAt": "2021-04-04T11:59:23.696Z",
    "__v": 0
}


-----------------------

> Retrieve a single Tutorial by id using GET /tutorials/:id Api

method 	: GET   
URL 	: http://localhost:3000/api/tutorials/609637d34914ee1aa49e5e5a

return value -> {
    "priceInRupees": 5000,
    "imageURL": "https://ik.imagekit.io/upgrad1/marketing-platform-assets/meta-images/home.jpg",
    "videoURL": "https://www.youtube.com/watch?v=MTdpHs6HWwM",
    "notesURL": "https://www.mongodb.com/mern-stack",
    "duration": 60,
    "popularity": 4,
    "_id": "6069aa1be81fc334e8c7b8d0",
    "title": "AJAX and javascript- advanced",
    "description": "Table of contents - Primary Topics",
    "published": true,
    "category": "DevOps",
    "createdAt": "2021-04-04T11:59:23.696Z",
    "updatedAt": "2021-04-04T11:59:23.696Z",
    "__v": 0
}

> if the Id supplied is wrong or nor present then 
> method 	: GET   
  URL 		: http://localhost:3000/api/tutorials/12345
  
return value -> {
    "message": "Error retrieving Course with id=6069aa1be81fc334e8c7b8d"
}


-----------------------

> Update a Tutorial using PUT /tutorials/:id Api

method 	: PUT   
URL 	: http://localhost:3000/api/tutorials/6069aa1be81fc334e8c7b8d0
body -> {
"duration": 310
}

return value -> {
    "message": "Course was updated successfully."
}

Note : check at the backend. The course duration would have got updated to 310 minutes. 

-----------------------

> Find all Tutorials which title contains 'js' : GET /tutorials?title=ajax

method 	: GET   
URL 	: http://localhost:3000/api/tutorials?title=ajax

return value -> [
    {
        "priceInRupees": 5000,
        "imageURL": "https://ik.imagekit.io/upgrad1/marketing-platform-assets/meta-images/home.jpg",
        "videoURL": "https://www.youtube.com/watch?v=MTdpHs6HWwM",
        "notesURL": "https://www.mongodb.com/mern-stack",
        "duration": 310,
        "popularity": 4,
        "_id": "6069aa1be81fc334e8c7b8d0",
        "title": "AJAX and javascript- advanced",
        "description": "Table of contents - Primary Topics",
        "published": true,
        "category": "DevOps",
        "createdAt": "2021-04-04T11:59:23.696Z",
        "updatedAt": "2021-04-04T12:06:24.128Z",
        "__v": 0
    }
]


> Suppose , if no match is found, then :

method 	: GET   
URL : http://localhost:3000/api/tutorials?title=programming
return value -> []

-------------------

> Find all Tutorials which category contains 'backend' : GET /tutorials/categories/backend

method 	: GET   
URL : http://localhost:3000/api//tutorials/categories/backend

return value -> [
    {
        "priceInRupees": 5000,
        "imageURL": "https://ik.imagekit.io/upgrad1/marketing-platform-assets/meta-images/home.jpg",
        "videoURL": "https://www.youtube.com/watch?v=MTdpHs6HWwM",
        "notesURL": "https://www.mongodb.com/mern-stack",
        "duration": 60,
        "popularity": 4,
        "_id": "6069b213e81fc334e8c7b8d1",
        "title": "Javascript for dummies",
        "description": "Table of contents - Primary Topics",
        "published": true,
        "category": "Frontend",
        "createdAt": "2021-04-04T12:33:23.419Z",
        "updatedAt": "2021-04-04T12:33:23.419Z",
        "__v": 0
    }
]

------------------

> Find all published Tutorials using GET /tutorials/published Api

method 	: GET   
URL :  http://localhost:3000/api/tutorials/published
return value -> [
    {
        "priceInRupees": 5000,
        "imageURL": "https://ik.imagekit.io/upgrad1/marketing-platform-assets/meta-images/home.jpg",
        "videoURL": "https://www.youtube.com/watch?v=MTdpHs6HWwM",
        "notesURL": "https://www.mongodb.com/mern-stack",
        "duration": 310,
        "popularity": 4,
        "_id": "6069aa1be81fc334e8c7b8d0",
        "title": "AJAX and javascript- advanced",
        "description": "Table of contents - Primary Topics",
        "published": true,
        "category": "DevOps",
        "createdAt": "2021-04-04T11:59:23.696Z",
        "updatedAt": "2021-04-04T12:06:24.128Z",
        "__v": 0
    }
]

---------------------------

> Delete a Tutorial using DELETE /tutorials/:id Api

method 	: DELETE  
URL :  http://localhost:3000/api/tutorials/6069aa1be81fc334e8c7b8d0
return value -> {
    "message": "Course was deleted successfully!"
}

---------------------------

> Delete all Tutorials using DELETE /tutorials Api

method 	: DELETE
URL : http://localhost:3000/api/tutorials/
return value -> {
    "message": "2 Courses were deleted successfully!"
}

---------------------------

> To create a enrollment into a course , check the enroll api
> Enrollment
	method : POST
    URL -> http://localhost:3000/api/enroll
    body -> {
    "userId" : "609a0c8d6a568132dc352fea",
    "courseId" : "609fbf6c71a3032c4c078fdf"
    }



