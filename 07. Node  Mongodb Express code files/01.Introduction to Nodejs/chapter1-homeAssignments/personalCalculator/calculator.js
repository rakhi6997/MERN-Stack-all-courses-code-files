// expecting quantity and percent as whole number
// sample api call ->  calpercentage(500, 33.67)
// should return 33.67% or 0.3367 of 500
exports.calpercentage = (quantity, percent) => {
    return "percentage : " + percent/100  * quantity;
    };

// sample 1:  api call ->  calProfit(500, 533.50)
// should return 533.50 - 500 = 33.50
// sample 2:  api call ->  calProfit(533.50, 500)
// should return 500 - 533.50 = seems, we didn't make profit this time !!
exports.calProfit = (cp, sp) => {
        let profit = sp - cp;
        if(profit > 0)
            return "profit amount : " + profit;
        else
            return "seems, we didn't make profit this time !!";
    };


// sample 1:  api call ->  calSI(50000, 1, 7)
// should return (50000*1*7)/100    
exports.calSI = (p, n, r) => {
    if(p>0 && n>0 && r>0)
            return "SI is : " +  (p * n * r) / 100;
    else 
            return "please ensure p,n,r all parameters are +ve";
    };

