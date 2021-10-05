var mongoose = require('mongoose');

var actorSchema = new mongoose.Schema({ 
  name: {
    type: String, 
    required: true,
    minLength : 3,
    maxLength : 30
  }, 
  Date_of_birth : {
    type: Date, 
    required: true

  }, 
  movies: [{
    type : mongoose.Schema.ObjectId,
    ref : 'Movie'
  }]
});

module.exports = mongoose.model('Actor', actorSchema);
