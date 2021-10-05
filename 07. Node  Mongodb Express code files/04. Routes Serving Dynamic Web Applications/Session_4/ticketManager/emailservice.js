class EmailService {
    send(email) {
        console.log(`Sending email to ${email}`);
    }
}

module.exports = EmailService


// Note :  In lieu of sending an actual email, 
// we are simply logging a message to the console 
// that would contain the email address 
// of someone buying a ticket. 