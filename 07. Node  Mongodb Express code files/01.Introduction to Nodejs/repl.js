// Create this class and object on the REPL :

class Goat {
	eat(foodType) {
	console.log(`I love eating ${foodType}`);
	}
	}

let goaty = new Goat();
goaty.eat("green grass");

// ------------------
// another example  -> decision making
let shoppingDone = false;
let childsAllowance;

if (shoppingDone === true) {
  childsAllowance = 10;
} else {
  childsAllowance = 5;
}

// to print the variable at the terminal
// simply specify the variable name
> childsAllowance


// -- modifying the above code 
// don't need to explicitly specify '=== true'
// directly use the boolean variable

let shoppingDone = false;
let childsAllowance;

if (shoppingDone) { 
  childsAllowance = 10;
} else {
  childsAllowance = 5;
}

//--------------------
// What is the o/p of this code ??
let cheese = 'Cheddar';

if (cheese) {
  console.log('Yay! Cheese available for making cheese on toast.');
} else {
  console.log('No cheese on toast for you today.');
}

// Rule : variable if defined is considered true 
//----------------------

let x = 5 , y = 30, z = 9;
let loggedIn = false, userName = "Suven";

if ((x === 5 || y > 3 || z <= 10) && (loggedIn || userName === 'Suven')) {
  console.log(`your details  ${userName} are correct`);
}

// ternary operator
let isBirthday = false;
let greeting = ( isBirthday ) ? 'Happy birthday Ms. Prachi — we hope you have a great day!' : 'Good morning Ms. Prachi.';

greeting


// --- to Exit the node shell or REPL :
// type .exit,    
or 
// press Ctrl-C twice, 
or 
// press Ctrl-D twice



