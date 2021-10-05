// We would load all libraries like express , bodyParser and CORS
const express = require("express");
bodyParser = require("body-parser");
const cors = require("cors");


// make express object 
const app = express();

// use the CORS object 
var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
// using bodyParser
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
// using bodyParser
app.use(bodyParser.urlencoded({ extended: true }));


// will create a mongoose object and connect to it.
const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit(1);
  });


// set up a default route for / 
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Upgrad InSession application development by Rocky Sir." });
});


require("./app/routes/tutorial.routes")(app);
// app which is the express object , 
// is being passed as a paramter to the tutorial.routes
// As all the internal page routing for the application is being done 
// by express in the  routes/tutorial.routes file.

require("./app/routes/user.routes")(app);

require("./app/routes/enrollment.routes")(app);

// set port and listen for requests, something like this :
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
