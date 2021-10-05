module.exports = app => {
  const tutorials = require("../controllers/userTutorial.controller.js");
  
    var router = require("express").Router();

    // Retrieve all Courses by category
    router.get("/category", tutorials.findAllCategory);
  
    // Retrieve all published Courses
    router.get("/published", tutorials.findAllPublished);
  
    // Retrieve a single Course with id
    router.get("/:id", tutorials.findOne);
  
    app.use('/api/tutorials', router);
  };