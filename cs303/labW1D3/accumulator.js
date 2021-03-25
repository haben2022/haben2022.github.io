"use strict"

/**
 * 

 * @returns {Accumulator} constructor function
 */
function Accumulator(firstValue){
//implement this
this.value = firstValue;
  
this.text = function() {
  this.value += parseInt(prompt('How much to add?'));
};

}

let accumulator = new Accumulator(1);
accumulator.text();
accumulator.text();
console.log(accumulator.value);

