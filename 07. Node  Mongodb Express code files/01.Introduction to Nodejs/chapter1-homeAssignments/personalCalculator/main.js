const calculatorModule = require("./calculator");

// api syntax : calpercentage(quantity, percent)
console.log(calculatorModule.calpercentage(500, 33.67));

// api syntax : calProfit(cp, sp)
console.log(calculatorModule.calProfit(533.50, 500));
console.log(calculatorModule.calProfit(500, 750));

console.log(calculatorModule.calSI(50000, 1, 7));


