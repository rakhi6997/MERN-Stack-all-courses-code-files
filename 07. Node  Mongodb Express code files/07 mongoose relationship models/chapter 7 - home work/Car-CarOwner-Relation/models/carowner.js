//About the CarOwner :
/*
name : String, required, minimum length as 3 chars and maximum 30 chars. 
age : number , required and min age as 18 and max 100
cars : As an array of references to Car Objects.
*/

const mongoose = require("mongoose");

const CarOwner = mongoose.model(
    "CarOwner",
    new mongoose.Schema({
      name: {  
          type : String,
          required : true,
          maxLength : 30,  
          minLength : 3   
        },
      age : {  
        type : number,
        required : true,
        max : 100,  
        min : 18
      },
      cars: [{ 
        type : Schema.Types.ObjectId,
        ref : "Car"
      }]
    })
  );
  
  module.exports = CarOwner;


/*  Ans to other Questions */ 

// What type of relationship do you think are carOwner - Car schemas forming ?
// Ans : One to Few 
// as One CarOwner can own 1 or more cars.


// How is the data being stored 
// Normalised or Denormalised form ? Justify it.
// Ans : Normalised or Referenced form.
// Although this data can be stored in embedded i.e Denormalised form as well.
// But if the owner is not a individual rather a transport Company, 
// having many vehicles then using above Normalised or Referenced form is better. 





