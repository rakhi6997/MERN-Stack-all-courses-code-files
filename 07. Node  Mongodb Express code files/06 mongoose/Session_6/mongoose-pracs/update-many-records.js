const mongoose = require('mongoose');
  
// Database connection
mongoose.connect('mongodb://127.0.0.1:27017/mongoose-mail', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});
  
// User model
const Student = mongoose.model('StudentTestSchema', {
    name: { type: String },
    marks: { type: Number },
    remark: { type: String }
});

/*
Student.insertMany([
    { name: 'Gourav', marks: 98.00},
    { name: 'Ayush', marks: 99.70},
    { name: 'Suven', marks: 99.90},
    { name: 'Dangi', marks: 99.99},    
]) .then(doc => {
       console.log(doc)
     })
     .catch(err => {
       console.error(err)
     })
*/

//------------------
// first : comment below update and run above code only.
// Next  : comment above code and run below code only.
// Last : check in backend ( through compass ) 
//------------------


// Find all documents matching the condition(marks >= 99) and update all
// This function has 4 parameters i.e.
// filter, update, options, callback
Student.updateMany(
    {marks:{$gte:99}},                      // search query
    {remark:"excellent"}                    // what to update
    ) .then(doc => {
        console.log(doc)
      })
      .catch(err => {
        console.error(err)
      });

      // How to read o/p of updateMany(). It is same as MongoDB docs
      // { n: 3, nModified: 3, ok: 1 }
      // n means no. of rows matching the filter query
      // nModified means no. of rows updated
      // ok : 1 means command ran successly. 