module.exports = app => {
  const tutorials = require("../controllers/tutorial.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Course route something like this 
    // router.post("/", tutorials.create);
    // NOTE : POST means to add or insert data
  
    // route to Retrieve all Courses would look like this 
    // router.get("/", tutorials.findAlltitle);
    // NOTE: GET means to fetch data 

    // route to Retrieve all Courses by category would look like this 
    // router.get("/categories/:categoryName", tutorials.findCoursesByCategory);

  
    // route to Retrieve all category names would look like this 
    // router.get("/categories", tutorials.findAllCategories);
  
    // route to Retrieve all published Courses would look like this 
    // router.get("/published", tutorials.findAllPublished);
  
    // route to Retrieve a single Course with id would look like this 
    // router.get("/:id", tutorials.findOne);
  
    // route to Update a Course with id would look like this 
    // router.put("/:id", tutorials.update);
  
    // route to Delete a Course with id would look like this 
    // router.delete("/:id", tutorials.delete);
  
    // route to delete all Courses would look like this
    // router.delete("/", tutorials.deleteAll);
  
    // ensure that all course mangement api calls would start as /api/tutorials/then_the_Api_Name   
    app.use('/api/tutorials', router);
  };
  
  
// Think of the test-cases to test the Api    