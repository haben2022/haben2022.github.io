"use strict"

/**
 * 

 * @returns {Accumulator} constructor function
 */
function Accumulator(curentValue,increment){
   this.curentValue=curentValue;
   this.increment=increment;
   this.accumulate=function(){
    return  this.curentValue+=this.increment;
   }
   this.report=function(){
     return this.curentValue;
   }
    
}


