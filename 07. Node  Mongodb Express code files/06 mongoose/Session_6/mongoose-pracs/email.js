let EmailModel = require('./email_model_v1.js')

let msg = new EmailModel({
  email: 'rockyjagtiani@gmail.com'
})

msg.save()
   .then(doc => {
     console.log(doc)
   })
   .catch(err => {
     console.error(err)
   })