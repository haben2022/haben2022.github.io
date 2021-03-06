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

// console.log(sumTo( 4 ));
// console.log(sumTo( 10 ));

/**
 * 
 * @param {number} n to calculate
 * @returns number
 */
 function factorial( n ) {
    if ( n===1 ) {
        return 1;
    }
    else {
        return n * factorial( n-1 );
    }
}


// console.log(Factorial( 5 ));
// console.log(Factorial( 4 ));
// console.log(Factorial( 3 ));

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

// console.log( fibonacci( 5 ));
// console.log( fibonacci( 7 ));
// console.log( fibonacci( 77 ));


let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

  function outputList( list ) {
      console.log ( list.value );
       
      if ( list.next ){
          outputList ( list.next );
      }
  }

  outputList( list );


  let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

  function reverseList( list ) {
    if (list.next) {
        reverseList(list.next);
      }
    
      console.log(list.value);
  }

  reverseList( list );