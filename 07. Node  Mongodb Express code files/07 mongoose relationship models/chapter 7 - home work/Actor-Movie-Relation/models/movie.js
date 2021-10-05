var mongoose = require('mongoose');

var movieSchema = new mongoose.Schema({ 
    title: {
        type: String, 
        required: true,
        minLength : 3,
        maxLength : 30
      }, 
     year_of_release : {
       type: Date, 
       required: true
     }, 
     actors: [{
       type : mongoose.Schema.ObjectId, 
       ref : 'Actor'
     }]
  });
  
  
  module.exports = mongoose.model('Movie', movieSchema);