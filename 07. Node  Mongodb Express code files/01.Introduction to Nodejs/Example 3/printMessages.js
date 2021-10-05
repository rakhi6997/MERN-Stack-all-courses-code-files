// A Node.js application is made up of many JavaScript files. 
// Each JavaScript file or folder containing a 
// code library is called a module.

// Suppose we wish to seperate Model ( means data)
// and the View  ( Code to display data ) 
// into sperate files. Then View Code would import 
// the module i.e code files of Model

// step 1 : code a meesages.js file.
// copy from Hello2 folder

// Import the local module like this :
// require the local module by using the require object
// and the module’s filename 
// (with or without the .js extension).
const messageModule = require("./messages");
messageModule.messages.forEach(m => console.log(m));


// require is another Node.js global object used to locally 
// introduce methods and objects from other modules. 
// Node.js interprets require("./messages") to look 
// for a module called messages.js within your project 
// directory and allows code within printMessages.js
// to use any properties on the exports object 
// in messages.js.

// About CommonJS :
// Node.js uses CommonJS, a tool that helps 
// JavaScript run outside a browser by helping
// define how modules are used. For module loading, 
// CommonJS specifies the require function. 
// For exporting modules, CommonJS provides 
// the exports object for each module.

// CommonJS establishes conventions on the 
// module ecosystem for JavaScript outside 
// of the web browser. 
//------------------