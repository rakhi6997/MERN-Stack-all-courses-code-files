const express = require("express");
bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

var corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Integration of Node-React." });
});

//Post API which expects 2 parameters
app.post("/add", (req, res) => {
  var num1 = parseInt(req.body.num1); //Converting String values to Integer as we have to perform arithmetic operators
  var num2 = parseInt(req.body.num2);
  var addition = num1 + num2;
  res.json({ message: addition });
});

const PORT = 5400;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
