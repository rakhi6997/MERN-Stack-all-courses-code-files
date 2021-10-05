const mongoose = require('mongoose');
  
// Database connection
mongoose.connect('mongodb://127.0.0.1:27017/mongoose-mail', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});
  
// User model
const Books = mongoose.model('BookSchema', {
    name: { type: String },
    author: { type: String },
    pages: { type: Number },
    bestPrice: { type: Number },
    kindleVersion: { type: Boolean }
});

/*
Books.insertMany([
    { name: 'Node.js Guide', author: 'Rocky & Prachi', pages: 250, bestPrice: 850, kindleVersion: 1 },
    { name: 'Python Programming', author: 'Suven', pages: 230, bestPrice: 2050, kindleVersion: 1 },
    { name: 'Databases', author: 'Ifrah Malik', pages: 150, bestPrice: 230.50, kindleVersion: 0 },    
    { name: 'Javascript', author: 'Prachi Agarwal', pages: 290, bestPrice: 560.75, kindleVersion: 1 }
]) .then(doc => {
       console.log("few documents inserted")
     })
     .catch(err => {
       console.error(err)
     })
*/



//------------------
// first : comment below update and delete operation and run above code only.
// Next  : comment above code and run below code one by one only.
//         i.e updateOne and  
//             then deleteOne 
// Last : check in backend ( through compass ) 
//------------------


// update one of the books having bestPrice > 2000 , to 1999
Books.updateOne(
    {bestPrice:{$gt:2000}},                      // search query
    {bestPrice:1999},                         // what to update
    
    {
      new: true,                        // return updated doc
      useFindAndModify : false          // use this , to avoid deprecation Warning
    }
    
    ) .then(doc => {
        console.log(doc)
      })
      .catch(err => {
        console.error(err)
      });



// delete one of the rows 
Books.deleteOne(
    {kindleVersion:0},                      // search query
    ) .then(doc => {
        console.log(doc)
      })
      .catch(err => {
        console.error(err)
      }); 

// see all documents after all above operation
Books.find()
    .then(doc => {
    console.log(doc)
    })
    .catch(err => {
    console.error(err)
    })
    
