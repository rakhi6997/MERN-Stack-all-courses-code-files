// Here we would define the Schema of a user
// Something like this 
/*

      mongoose.Schema(
        {
          firstName: {type: String, required: true},
          lastName: String,
          email: { type : String , unique : true, required : true },
          password: {type: String, required: true},
          role: {type: String, default: 'user'}, 
          isLoggedIn: Boolean
        },
        
      )

*/