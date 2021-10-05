const EventEmitter = require("events");


class TicketManager extends EventEmitter {
    constructor(supply) {
        super();
        this.supply = supply;
    }

// version 1 of buy():

    buy(email, price) {
        this.supply--;
        this.emit("buy", email, price, Date.now());
    }
    
    
    // use this version of buy() for version 3 in main.js
    // first read the note of version 3 in main.js file.
/*
    buy(email, price) {
        if (this.supply > 0) {
            this.supply--;
            this.emit("buy", email, price, Date.now());
            return;
        }
    
        this.emit("error", new Error("There are no more tickets left to purchase"));
    }
*/    

}
// The constructor has one supply argument. 
// This is a number of tickets we can sell. 
// We have to call super() to get access to the methods and properties of EventEmitter
// buy() method is called when a ticket is purchased.

// export this module , so that we can use it in other .js files.
module.exports = TicketManager