// Note : Node Terminal is called as 
// Read-Evaluate-Print Loop (REPL)

// Imagine that you’re working on an application 
// to send positive messages to your users.
// Before you fully incorporate your file 
// of positive messages into the application, you
// want to test it in your Node.js Terminal

// step 1: define an array of meesages
let messages = [
    "A change of environment can be a good thing!",
    "You will make it!",
    "Just run with the code!"
    ];


// optional
// step 2 : import this file to terminal or REPL 
// use .load messages.js


// step 3 : test this list, 
// loop through the array and broadcast each message
messages.forEach(message => console.log(message));


// step 4 : save the code to
// a file called positiveMessages.js 
// by typing .save positiveMessages.js
