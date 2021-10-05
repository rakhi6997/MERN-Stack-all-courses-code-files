// Here we would define the Schema of a user
// Something like this 
/*

      mongoose.Schema(
        {
          email: String,
          password: String,
          role: {type: String, default: 'user'}, 
          isLoggedIn: Boolean
        },
        { timestamps: true }
      )

*/