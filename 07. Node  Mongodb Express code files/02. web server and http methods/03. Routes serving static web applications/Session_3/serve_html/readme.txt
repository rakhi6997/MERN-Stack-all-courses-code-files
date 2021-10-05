In this Project : 
It’s time to build a basic recipe website. 

The site should have three static pages with some images 
and styling. 

Realize that all the applications we’ve built so far respond 
only with individual lines of HTML. 

Qn: How do you respond with rich content for each page 
without cluttering your main application file ?

Ans : 
a. You can create three individual pages -> HTML files 
b. Place them views folder
c. all the code determining which content you show 
   goes in the main.js file i.e routing code goes here.

//---------------------

Follow these steps:
1 Create a new project folder called serve_html.
2 Within that folder, create a blank main.js file.
3 Create another folder called views within serve_html.
4 Within views, create an index.html file.

//----------------------

The client can see this page rendered in a browser only 
with the help of another Node.js core module: fs, 
which interacts with the filesystem 
on behalf of your application.

Through the fs module, your server can access 
and read your index.html file 
and other .html files as well. 

//----------------------

// There are 2 versions in this project.

// at a time uncomment and run only one version. 
// version 1 : Using fs module to serve 
               only the index.html page


// version 2 : Using fs and routing to dynamically 
               read and serve files in main.js
               3 files : contactUs, thankyou, aboutUs 
// Note : aboutUs files has images also.
//----------------------

NOTE : Did u see broken Images ?????
//-------------------------------
Thats because any reference from HTML has to be routed.
For which we have to write additional code in the main.js file.

Generic steps for serving any static data in Node is : 
1. Parse the incoming HTTP request, to know the requested path.
2. Check if the path exists to respond to status as success or not found (optional).
3. Get the extension of the file to set content-type.
4. Serve the content-type in the header and serve the requested file in response.


We will do it in the Next project !!!!





