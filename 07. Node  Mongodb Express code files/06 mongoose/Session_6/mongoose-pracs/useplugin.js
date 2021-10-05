let mongoose = require('mongoose')
let timestampPlugin = require('./plugins/timestamp')

// Database connection
mongoose.connect('mongodb://127.0.0.1:27017/mongoose-mail', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

let userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String
})

// we can add plugins to as many schemas needed , with out writing repeative code
userSchema.plugin(timestampPlugin)
//emailSchema.plugin(timestampPlugin)


 // making a Model from the Schema
 let UserModel = mongoose.model('User', userSchema)

 // Making objects of the Model
 let userobject = new UserModel({
     firstName: 'Radhika',
     lastName: 'Apte'
   })
 
   userobject.save()
    .then(doc => {
      console.log(doc)
    })
    .catch(err => {
      console.error(err)
    })