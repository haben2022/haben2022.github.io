"use strict"
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