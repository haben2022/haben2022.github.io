"use strict";
/**
 * 
 * @param {number} n a number to add
 * @returns number 
 */
function sumTo( n ) {
    let sum = 0;
    for (let i = n ;i > 0 ; i--){
        sum += i;
    }
    return sum;
}

console.log(sumTo( 4 ));
console.log(sumTo( 10 ));

/**
 * 
 * @param {number} n to calculate
 * @returns number
 */
 function calculateFactorial( n ) {
    if ( n===1 ) {
        return 1;
    }
    else {
        return n * calculateFactorial( n-1 );
    }
}


console.log(Factorial( 5 ));
console.log(Factorial( 4 ));
console.log(Factorial( 3 ));

/**
 * 
 * @param {number} num to compute
 * @returns number
 */
 function fibonacci( num ) {
    let a = 0, b = 1, c = 0;
    for (let i = num; i > 0; i--) {
        c = b;
        b = a + b;
        a = c;
        
    }
return c;
}

console.log( fibonacci( 5 ));
console.log( fibonacci( 7 ));
console.log( fibonacci( 77 ));