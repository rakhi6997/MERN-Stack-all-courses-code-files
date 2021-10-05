const mongoose = require('mongoose');
  
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

userSchema.methods.getInitials = function() {
    return this.firstName[0] + this.lastName[0]
  }
 
userSchema.statics.findByName = function(value){
    this.find( {firstName : value}, (err, document)=>{
        console.log(document);
    })
}

 // making a Model from the Schema
let UserModel = mongoose.model('User', userSchema)

// Making objects of the Model
let userobject = new UserModel({
    firstName: 'Rocky',
    lastName: 'Jagtiani'
  })

  userobject.save()
  .then(doc => {
    console.log(doc)
  })
  .catch(err => {
    console.error(err)
  })


UserModel.findByName("Rocky");