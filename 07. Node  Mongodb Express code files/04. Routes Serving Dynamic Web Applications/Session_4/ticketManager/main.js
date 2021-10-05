// version 1 :
/*
const TicketManager = require("./ticketManager");

const ticketManager = new TicketManager(10);

ticketManager.on("buy", () => {
    console.log("Someone bought a ticket!");
});

ticketManager.buy("test@email.com", 20);

// what happens if we buy multiple tickets
// uncomment and run below code 
ticketManager.buy("abc@email.com", 20);
ticketManager.buy("def@email.com", 20);
*/


// version 2 : 

const TicketManager = require("./ticketManager");
const EmailService = require("./emailService");
const DatabaseService = require("./databaseService");

const ticketManager = new TicketManager(3); // only 3 tickets to sell 
const emailService = new EmailService();
const databaseService = new DatabaseService();

ticketManager.on("buy", (email, price, timestamp) => {
    emailService.send(email);
    databaseService.save(email, price, timestamp);
});

ticketManager.buy("test@email.com", 10);



// version 3 : Handling Error Events
// In version 2 , we could sell more tickets than we have !!
// for running version 3, 
// use the (version 2 or modified version) of the buy() in the ticketmanager.js
// comment the old version of buy() and uncomment the new version of buy()
// use the same code of version 2 above in this file main.js

// to test the new buy() method in ticketmanager.js
// uncomment below 3 buy lines 
/*
ticketManager.buy("test@email.com", 10);
ticketManager.buy("test@email.com", 10);
ticketManager.buy("test@email.com", 10); // this would invoke the error message -- Note A
*/

// Note A : "Unhandled 'error' event". Did u Notice it ??? 
// If an event emitter emits an error and we did not attach a listener 
// for error events, Node.js throws the error and crashes the program. 

// It’s considered best practice to always listen for error events 
// if you’re listening to an event emitter. 
// If you do not set up a listener for errors, 
// your entire application will crash if one is emitted. 
// With an error listener, you can gracefully handle it.

// Add below error listener before we start buying tickets.
/*
ticketManager.on("error", (error) => {
    console.error(`Gracefully handling our error: ${error}`);
});
*/