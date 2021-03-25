"use strict";

/**
 * @returns {Calculator} this is a constructor function
 */
function Calculator() {
    this.text = function() {
        this.num1 = parseInt(prompt("enter first number:"));
        this.num2 = parseInt(prompt("enter second number:"));
      };
    
      this.sum = function() {
        return this.num1 + this.num2;
      };
    
      this.multp = function() {
        return this.num1 * this.num2;
      };
    }
    
    let calculator = new Calculator();
    calculator.text();
    
   console.log( "Sum=" + calculator.sum() );
   
        
    console.log( "Mul=" + calculator.multp() );
  