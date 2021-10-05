class DatabaseService {
    save(email, price, timestamp) {
        console.log(`Running query: INSERT INTO orders VALUES (email, price, created) VALUES (${email}, ${price}, ${timestamp})`);
    }
}

module.exports = DatabaseService

// Note : Similar to the email service’s send() method, 
// the save() function uses the data that accompanies a buy event, 
// logging it to the console instead of actually inserting it into a database. 
// This method needs the email of the purchaser, 
// price of the ticket, and the 
// time the ticket was purchased to function. 