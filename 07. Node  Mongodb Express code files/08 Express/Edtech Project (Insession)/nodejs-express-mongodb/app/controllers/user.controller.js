const db = require("../models");
const User = db.users;

// Create and save a user
exports.singUp = (req, res) => {
    // Validate request
    if (!req.body.email && !req.body.password) {
      res.status(400).send({ message: "Please provide email and password to continue" });
      return;
    }
    
    const email = req.body.email;

    if (email == 'admin1@upgrad.com' || email == 'admin2@upgrad.com') {
      res.status(400).send({ message: "Sorry, you cannot register as admin" });
      return;
    }

    const filter = { email: email };

    //Find user based on the email provided in API req 
    User.findOne(filter, (err, user)=>{
     
      if(err || user === null){//If not found
        // Create a User
        const user = new User({
          email: email,
          password: req.body.password,
          role: req.body.role ? req.body.role : 'user',
          isLoggedIn : true,   
        });

        // Save user details in the database
        user
          .save(user)
          .then(data => {
            res.send(data);
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred, please try again later"
            });
          });
      }else {
        //User found with same email
        res.status(500).send({
          message: "User already exist."
        });
      }
      
    });

  };

// Retrieve user using the email provided in the req parameter.
// Validate user by matching the password provided in the req parameter.
exports.login = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    // Validate request
    if (!email && !password) {
      res.status(400).send({ message: "Please provide email and password to continue" });
      return;
    }

    const filter = { email: email };

    User.findOne(filter, (err, user)=>{
     
      if(err || user === null){
        res.status(500).send({
          message: "User not found."
        });
      }else {
        if(password === user.password){
          user.isLoggedIn = true;
            
          User.findOneAndUpdate(filter, user, { useFindAndModify: false })
          .then(data => {
            if (!data) {
              res.status(404).send({
                message: "Some error occurred, please try again later."
              });
            } else res.send(user);
          })
          .catch(err => {
            res.status(500).send({
              message: "Error updating."
            });
          });

        }else{
          res.status(500).send({
            message: "Please enter valid password."
          });
        }
      }
      
    });

  };

// Update isLoggedIn parameter of a User.
exports.logout = (req, res) => {

  // Validate request
  if (!req.body.id) {
    res.status(400).send({ message: "Please provide user Id." });
    return;
  }

  const id = req.body.id;
  const update = { isLoggedIn: false };

  User.findByIdAndUpdate(id, update)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: "Some error occurred, please try again later."
        });
      } else res.send({ message: "Logged out successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating."
      });
    });
};