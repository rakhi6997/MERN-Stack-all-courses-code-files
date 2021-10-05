const mongoose = require("mongoose");

// this would load the index.js file in models folder
const db = require("./models");


const createTutorial = function(tutorial) {
  return db.Tutorial.create(tutorial).then(docTutorial => {
    console.log("\n>> Created Tutorial:\n", docTutorial);
    return docTutorial;
  });
};

// change in version 2 w.r.t version 1 is 
// Here we are using the Image schema ( see db.Image.create )
const createImage = function(tutorialId, image) {
  return db.Image.create(image).then(docImage => {
    console.log("\n>> Created Image:\n", docImage);
    return db.Tutorial.findByIdAndUpdate(
      tutorialId,
      {
        $push: {
          images: {
            _id: docImage._id,
            url: docImage.url,
            caption: docImage.caption
          }
        }
      },
      { new: true, useFindAndModify: false }
    );
  });
};

// The await expression causes async function execution to pause until a Promise 
// is settled (that is, fulfilled or rejected), and to resume execution 
// of the async function after fulfillment. 
// When resumed, the value of the await expression is that of the fulfilled Promise
const run = async function() {
    // we are creating a tutorial with empty image array
    var tutorial = await createTutorial({
    title: "Tutorial #1",
    author: "rocky"
  });
  
  // same above tutorial object gets updated now with 2 images.
  // both images , one by one are pushed into the array
  tutorial = await createImage(tutorial._id, {
    path: "sites/uploads/images/mongodb.png",
    url: "/images/mongodb.png",
    caption: "MongoDB Database",
    createdAt: Date.now()
  });
  console.log("\n>> Tutorial:\n", tutorial);

  tutorial = await createImage(tutorial._id, {
    path: "sites/uploads/images/one-to-many.png",
    url: "/images/one-to-many.png",
    caption: "One to Many Relationship",
    createdAt: Date.now()
  });
  console.log("\n>> Tutorial:\n", tutorial);
};

// connecting to the database
mongoose
  .connect("mongodb://localhost/relationshipModels_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Successfully connect to MongoDB."))
  .catch(err => console.error("Connection error", err));

run();