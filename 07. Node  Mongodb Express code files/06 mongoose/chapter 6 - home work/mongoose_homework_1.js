var mongoose = require('mongoose');
 
// make a connection 
mongoose.connect('mongodb://localhost:27017/movieActors', 
            { useNewUrlParser: true, useUnifiedTopology: true });
 
// get reference to database
var db = mongoose.connection;
 
db.on('error', console.error.bind(console, 'connection error:'));
 
db.once('open', function() {
    console.log("Connection Successful!");
     
    // define Schema
    var movieSchema = new mongoose.Schema({ 
        id: {
          type: Number, 
          required: true, 
          index: {
            unique: true
          }
        }, 
        title: {
          type: String, 
          required: true
         }, 
         year: {
           type: Number, 
           required: true
         }, 
         actors: {
           type : String,   // provide comma seperated list of actors
           required: true
         }
      });
 
    // compile schema to model
    var Movie = mongoose.model('Movie', movieSchema, 'MovieStore');
 
    // documents array
    var myobj = [
        { title: 'The Room', year: 2017, actors : "Tommy Wiseau, Juliette Danielle, Greg Sestero, Philip Haldiman, Carolyn Minnott" },
        { title: 'Titantic', year: 1997, actors : "Leonardo DiCaprio, Kate Winslet, Billy Zane, Kathy Bates, Frances Fisher, Bernard Hill, Jonathan Hyde, Danny Nucci, David Warner, Bill Paxton" }
   ];

    // save multiple documents to the collection referenced by Book Model
    Movie.collection.insertMany(myobj, function (err, docs) {
      if (err){ 
          return console.error(err);
      } else {
        console.log("Some movies inserted to Collection");
      }
    });
     
});