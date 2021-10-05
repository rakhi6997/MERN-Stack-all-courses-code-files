// we would load all libraries like express , bodyParser and cors here 
// something like this 
/*
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
*/


// make express object 
// something like this 
// const app = express();



// use the CORS object 


// parse requests of content-type - application/json
// using bodyParser



// parse requests of content-type - application/x-www-form-urlencoded
// using bodyParser


// will create a mongoose object and connect to it.




// set up a default route for / 
// some thing like :
/*
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Upgrad InSession application development by Rocky Sir." });
});
*/


// load the routes for courses , something like 
// require("./app/routes/tutorial.routes")(app);



// load the routes for user , something like 
// require("./app/routes/user.routes")(app);


// set port and listen for requests, something like this :
/*
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
*/