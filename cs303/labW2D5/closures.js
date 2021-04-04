"use strict"
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
module.exports = {inArray, inBetween, byField, makeArmy }; //add all of your function names here that you need for the node mocha tests


/**
 * 
 * @param {Array} arr holding values
 * @returns {Function} returns a function that tests whether its argument is in the arr
 * 
 */
 const arr = [1, 2, 3, 4, 5, 6, 7];
function inArray(arr) {
    return function (num){
          return  arr.includes(num);
            }
 }
    
    
// console.log( arr.filter(inArray([1,2,10])) );




/**
 * 
 * @param {number} low is bottom of range
 * @param {number}  high is top of range
 * @returns {Function} returns a function that tests whether its argument is inside the range
 * 
 */
function inBetween(low, high) {
    return function (n){
        if ( n >= low && n <=high){
            return true;
        }
    }

}

// console.log( arr.filter(inBetween(2, 6)) ); 

/**
 * 
 * @param {String} fieldName is a property on object to be sorted
 * @returns {Function} sorting function
 */
function byField(fieldName){
    return function(a,b){ 
        if (a[fieldName] > b[fieldName]){
         return 1;
     }
     else {
         return -1;
     }
 }
}


/**
 * @returns {Function} closure that returns it's number
 */
function makeArmy() {
    let shooters = [];
  
    let i = 0;
    while (i < 10) {
      let shooter = function() { 
       return  i ; 
      };
      shooters.push(shooter); 
      i++;
    }
  
  
    return shooters;
  }

  let army = makeArmy();

  //army[0](); // the shooter number 0 shows 10
  //army[5](); // and number 5 also outputs 10...