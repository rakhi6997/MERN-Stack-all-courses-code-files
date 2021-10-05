// We would load all libraries like express , bodyParser and CORS
const express = require("express");
bodyParser = require("body-parser");
const cors = require("cors");


// make express object 
const app = express();

// use the CORS object 
var corsOptions = {
  origin: "http://localhost:8081"
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
    process.exit();
  });


// set up a default route for / 
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Upgrad InSession application development by Rocky Sir." });
});


// load the routes for courses 
require("./app/routes/tutorial.routes")(app);


// load the routes for user
require("./app/routes/user.routes")(app);


// set port and listen for requests, something like this :
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
