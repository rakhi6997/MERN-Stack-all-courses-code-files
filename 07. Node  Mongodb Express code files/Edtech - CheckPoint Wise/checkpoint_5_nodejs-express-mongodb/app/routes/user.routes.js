module.exports = app => {
  const users = require("../controllers/user.controller");
  
    var router = require("express").Router();
  
    // route for Login , like this 
    // router.post("/login", users.login);
  
    // route for sign-up , like this 
    // router.post("/sign-up", users.signUp);

    // route for logout , like this 
    router.post("/logout", users.logout);
  
    // ensure that all user mangement api calls would start as /api/then_the_Api_Name
    app.use('/api', router);
  };

// Think of the test-cases to test the Api  