// Routing means calling the correct api of controller function
// depending upon the client request

// We would load user.controller.js , something like :


// and then define routes for   

// 1. SignUp a new user.  Emailid , password and role are needed.

// 2. Login a user.  Provided he has signed up

// 3. Logout a user.  In this case we would just set a flag isLoggedIn to FALSE




// Have a look at some sample calls :
  /*
    Signup
    URL -> http://localhost:3000/api/sign-up
    body -> {
      "email" : "rockysuven@somemail.com",
      "password" : "suven123",
      "role" : "user"
}

    Login 
    URL -> http://localhost:3000/api/login
    body -> {
      "email" : "rockysuven@somemail.com",
      "password" : "suven123"
 }

    Logout
    URL -> http://localhost:3000/api/logout
    body -> {
      "id": "60699113a9d6f338bc1496cb"
}
  */