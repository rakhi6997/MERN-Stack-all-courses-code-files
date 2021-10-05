let EmailModel = require('./email_model_v2.js')

EmailModel
  .findOneAndUpdate(
    {
      email: 'sreejitnair@upgrad.com'               // search query
    }, 
    {
      email: 'sreejitnair@gmail.com'   // field:values to update
    },
    {
      new: true,                       // return updated doc
      runValidators: true,              // validate before update
      useFindAndModify : false          // use this , to avoid deprecation Warning
    })
  .then(doc => {
    console.log(doc)
  })
  .catch(err => {
    console.error(err)
  })