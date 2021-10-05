module.exports = app => {
  const enrollments = require("../controllers/enrollment.controller");
  
    var router = require("express").Router();

    // create a route to enroll a candidate into the programme.  
    // router.post("/enroll", enrollments.enroll);
    
    // ensure that all api calls for enrollment start with /api/the_the_API_NAME
    app.use('/api', router);
  };

// Think of the test-cases to test the Api  