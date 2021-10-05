Consider this You want to build an application to help people share food recipes and
learn from one another. Through this application, users can subscribe, join online
courses to practice cooking with the application’s recipes, and connect with other
users.

You plan to use Node.js to build this web application, and you want to start by verifying
users’ ZIP codes to determine the locations and demographics of your audience. 

Will you need to build a tool for checking ZIP codes in addition to the application?

No. 

A package for verifying locations based 
on ZIP codes is available. Install the cities package 
(https://www.npmjs.com/package/cities), 
which converts text addresses to location coordinates.

// ------------------------
Note : If you’d like to incorporate some functionality in your application, you can likely find a
package that performs this task at https://www.npmjs.com.
// ------------------------


Steps : 
1. create a folder called recipe_connection, 

2. navigate to your project directory in terminal,
   and use the npm init command to initialize 
   your application

3. For now, be sure to enter your name, 
   use main.js as the entry point, 
   and press Enter to accept all the default options.

4. install cities package 
   npm install cities --save

5. Test this new package by adding 
   the below lines :
    
    const cities = require("cities");
    var myCity = cities.zip_lookup("10016");
    console.log(myCity);