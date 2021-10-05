// About the Car : 
/*
make : String, required, minimum length as 2 chars and maximum 30 chars.
model : String, required, minimum length as 2 chars and maximum 30 chars.
owner : as a reference to a single CarOwner Object.
*/

const mongoose = require("mongoose");

const Car = mongoose.model(
    "Car",
    new mongoose.Schema({
      make: {  
          type : String,
          required : true,
          maxLength : 30,  
          minLength : 2
        },
      model : {  
        type : String,
        required : true,
        maxlength : 30,  
        minlength : 2
      },
      owner: {
        type : Schema.Types.ObjectId,
        ref : "CarOwner"
      }
    })
  );
  
  module.exports = Car;

  /*  Ans to other Questions */  
  // in the CarOwner.js file