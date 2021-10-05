// Here we would define the Schema of a Online Course
// Something like this 
/*
      mongoose.Schema(
        {
          title: {type: String, required:true},
          description: String,
          skills : [String],
          chapters : {type: [String], required:true, trim: true},
          published: Boolean, 
          priceInRupees : {type: Number, default: 5000, trim: true, min : 0, max: 30000},
          priceAfterDiscount : {type: Number, min : 0, max: 30000, trim: true},  // at frontend don't allow -ve price
          category : String,    // allow categories through a drop down box from React frontend
          imageURL : { type: String, default: 'someURL' },
          videoURL : { type: String, default: 'someURL' },
          notesURL : { type: String, default: 'someURL' },
          duration : { type: Number, default: 60 , min : 0, max: 1200 },  // duration is in minutes
          popularity : { type: Number, default: 4.0 },  // lets start the popularity Index from 4.0 on  5
          author: String
        },
*/

  // Note : popularity Index would not be entered by the Admin from FrontEnd
  // Its for representational purposes only. 
  // For demonstration 