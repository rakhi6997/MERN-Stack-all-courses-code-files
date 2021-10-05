let EmailModel = require('./email_model_v2.js')

/*
// adding one more record
let msg = new EmailModel({
  email: 'SREEJITnair@gmail.com'
})

msg.save()
   .then(doc => {
     console.log(doc)
   })
   .catch(err => {
     console.error(err)
   })
*/

// now finding records
EmailModel
  .find({
    email: 'sreejitnair@gmail.com'   // search query
  })
  .then(doc => {
    console.log(doc)
  })
  .catch(err => {
    console.error(err)
  })

// finding all emails starting with p
  EmailModel
  .find({
    email : {$regex : /^p/}
    })
  .then(doc => {
    console.log(doc)
  })
  .catch(err => {
    console.error(err)
  })
