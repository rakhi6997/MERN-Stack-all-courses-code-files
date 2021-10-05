let EmailModel = require('./email_model_v2.js')

let msg = new EmailModel({
  email: 'prachiagrarwal@gmail.com'
})

msg.save()
   .then(doc => {
     console.log(doc)
   })
   .catch(err => {
     console.error(err)
   })

   // try re-running this code 
   // It should give an error  E11000 duplicate key error collection
   // Remember :  email as a unique contraint 
   // according to the Schema