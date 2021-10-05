// practice - example 1 
// Example 1 — Create an event emitter instance and register a more than one callbacks
events = require('events');
const myEmitter = new events.EventEmitter();
function handler1() {
   console.log('an event occurred!');
}
function handler2() {
   console.log('yet another event occurred!');
}

//myEmitter.on('eventOne', handler1); // Register for eventOne
//myEmitter.on('eventOne', handler2); // Register for eventOne
// When the event 'eventOne' is emitted, 
// both the above callbacks should be invoked.
//myEmitter.emit('eventOne');


// Example 2 — Registering for the event to be fired only one time using once.
// before running below code , comment .on and .emit methods above
//myEmitter.once('eventOnce', () => console.log('eventOnce once fired')); 
//myEmitter.emit('eventOnce');
//myEmitter.emit('eventOnce');  // Note : U won't see any o/p for this !!


// Example 3 — Registering for the event with callback parameters
// before running below code, comment .once and .emit methods above
//myEmitter.on('status', (code, msg)=> console.log(`Got ${code} and ${msg}`));

// Emitting the event with parameters
// myEmitter.emit('status', 200, 'ok');


// Example 4 — Unregistering events
// before running below code, comment .on and .emit methods of example 3
myEmitter.on('eventOne', handler1); // Register for eventOne
myEmitter.on('eventOne', handler2); // Register for eventOne
myEmitter.emit('eventOne');  // u should see 2 o/ps
myEmitter.off('eventOne', handler1);
// Now if you emit the event as follows, only handler2 would respond
myEmitter.emit('eventOne');

// Example 5 — Getting Listener count
console.log(myEmitter.listenerCount('eventOne'));

// Example 6— Getting Raw Listeners
console.log(myEmitter.rawListeners('eventOne')); 






