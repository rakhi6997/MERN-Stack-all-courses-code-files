// When any other file requires models folder 
// it would run this index page.
// something similar to a website where 
// www.amazon.com is same as www.amazon.com/index.php

// load the db.config.js file 
const dbConfig = require("../config/db.config.js");

// setup or Load mongoose
const mongoose = require("mongoose");

// set up the database object 
const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.tutorials = require("./tutorial.model.js")(mongoose);
// https://stackoverflow.com/questions/9146980
// here mongoose is a variable u r passing to tutorial.model.js
db.users = require("./user.model.js")(mongoose);
db.enrollments = require("./enrollment.model.js")(mongoose);

module.exports = db;

