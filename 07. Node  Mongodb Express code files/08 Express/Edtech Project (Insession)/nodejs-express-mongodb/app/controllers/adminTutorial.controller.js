const db = require("../models");
const Tutorial = db.tutorials;

// Create and save a new course
exports.create = (req, res) => {
    
    // Validate request
    if (!req.body.title) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
  
    // Create a course
    const tutorial = new Tutorial({
      title: req.body.title,
      description: req.body.description,
      skills : req.body.skills,
      chapters : req.body.chapters,    // chapter names should be comma separated
      published: req.body.published ? req.body.published : false,
      category : req.body.category,
      duration : req.body.duration,
      imageURL : req.body.imageURL,
      videoURL : req.body.videoURL,
      notesURL : req.body.notesURL,
      priceInRupees : req.body.priceInRupees,
      priceAfterDiscount : req.body.priceAfterDiscount
      
    });

    // Save course in the database
    tutorial
      .save(tutorial)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Course."
        });
      });
  };


// Find a single course with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Tutorial.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Could not find a course with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving a course with id=" + id });
      });
  };

// Update a course by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
    const id = req.params.id;
    Tutorial.findOneAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update course with id=${id}. Maybe course is not present!`
          });
        } else res.send({ message: "Course was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error occurred while updating course with id=" + id
        });
      });
};

// Delete a course with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    Tutorial.findOneAndDelete(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Course with id=${id}. Maybe Course was not found!`
          });
        } else {
          res.send({
            message: "Course was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Course with id=" + id
        });
      });
};

// Delete all courses from the database.
exports.deleteAll = (req, res) => {
  Tutorial.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} courses were deleted successfully!`
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all courses."
        });
      });
  };

// Find all published courses
exports.findAllPublished = (req, res) => {
  Tutorial.find({ published: true })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving courses."
        });
      });
  };