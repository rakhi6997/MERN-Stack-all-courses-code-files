Adding routes to a web application
//--------------------------------
A route is a way of determining how an application 
should respond to a request made to a specific URL. 

// Example :
/info URL --> http:// localhost:3000/info
/contactUs URL --> http:// localhost:3000/contactUs
/              --> http:// localhost:3000/

/ is the home page or index page or default page.


// -- Steps ---
You set up a mapping of routes to responses called 
routeResponseMap. When a request is
made to http://localhost:3000/info, 
you check whether the request’s URL has a match in
routeResponseMap and respond with an info page heading. 

When a request is made to
http:// localhost:3000/contact, 
you respond with a contact page heading. 

To all other requests, you respond with a generic greeting.