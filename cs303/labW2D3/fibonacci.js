"use strict"
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