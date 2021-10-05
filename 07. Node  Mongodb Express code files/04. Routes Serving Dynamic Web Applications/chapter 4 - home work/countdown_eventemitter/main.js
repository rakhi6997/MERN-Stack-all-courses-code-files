events = require('events');
//const myEmitter = new events.EventEmitter();

class CountDown extends events.EventEmitter {
    constructor(countdownTime) {
        super();
        this.countdownTime = countdownTime;
        this.currentTime = 0;
    }

    startTimer() {
        const timer = setInterval(() => {
            this.currentTime++;
            this.emit('update', this.currentTime);
    
            // Check if countdown has reached to the end
            if (this.currentTime === this.countdownTime) {
                clearInterval(timer);
                this.emit('end');
            }
    
            // Check if countdown will end in 2 seconds
            if (this.currentTime === this.countdownTime - 2) {
                this.emit('end-soon');
            }
        }, 1000);
    }
}

const myCountDown = new CountDown(5);

//add a few subscribers to this event emitter:
myCountDown.on('update', (t) => {
    console.log(`${t} seconds has been passed since the timer started`);
});

myCountDown.on('end', () => {
    console.log('Countdown is completed');
});

myCountDown.on('end-soon', () => {
    console.log('Count down will be end in 2 seconds');
});

myCountDown.startTimer();

/* 
In the startTimer function, we have started an interval-based event 
that emits the update event in an interval of a second.

At the first if condition, we check if the countdown has 
reached the end and stop the interval-based event. 
If so, we fire an end event.

In the second condition, we check if the countdown is 2 seconds away 
from ending, and publish the end-soon event if so.

*/