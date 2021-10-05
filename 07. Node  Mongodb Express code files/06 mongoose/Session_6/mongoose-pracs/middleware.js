let mongoose = require('mongoose')

// Database connection
mongoose.connect('mongodb://127.0.0.1:27017/mongoose-mail', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

/*
let userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  createdAt: Date,
  updatedAt: Date
})


userSchema.pre( 'save',  function (next) {
    let now = Date.now()
     
    this.updatedAt = now;
    // Set a value for createdAt only if it is null
    if (!this.createdAt) {
      this.createdAt = now
    }
    
    // Call the next function in the pre-save chain
    next();    
  })
*/

const UserSchema = new mongoose.Schema({ 
  firstName: String, 
  lastName: String, 
  fullName: String, 
}) 

UserSchema.pre('save', async function preSave() { 
  this.fullName = `${this.lastName} ${this.firstName}` 
}) 

UserSchema.post('save', async function postSave(doc) { 
  console.log(`New user created: ${doc.fullName}`) 
}) 

// making a Model from the Schema
const User = mongoose.model('User', UserSchema) 

// Making objects of the Model
let userobject = new User({
    firstName: 'Suven',
    lastName: 'Consultants'
  })

  // saving the new record 
  userobject.save()
   .then(doc => {
     console.log(doc)
   })
   .catch(err => {
     console.error(err)
   })

  