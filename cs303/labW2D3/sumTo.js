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