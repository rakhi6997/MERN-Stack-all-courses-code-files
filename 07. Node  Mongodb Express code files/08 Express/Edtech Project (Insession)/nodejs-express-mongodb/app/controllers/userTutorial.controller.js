const db = require("../models");
const Tutorial = db.tutorials;


// Retrieve all courses from the database by title.
// if no title is passed then all courses are retrieved
exports.findAlltitle = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};
    Tutorial.find(condition)
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


// Retrieve all courses from the database by category.
//if no category is passed then all courses are retrieved
exports.findAllCategory = (req, res) => {
  const category = req.query.category;
  var condition = category ? { category: { $regex: new RegExp(category), $options: "i" } , published: true} : {};
  Tutorial.find(condition)
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


// Find a single course with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Tutorial.find({published: true, id:id})
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

// Find all published courses
exports.findAllPublished = (req, res) => {
  Tutorial.find({published: true})
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