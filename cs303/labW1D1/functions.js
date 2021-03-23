"use strict";
/**
 * 
 * @param {number} a is a number
 * @param {number} b is a number 
 * @param {number} c is a number
 * @returns {number} largest of a, b, c
 */


function maxOfThree(a, b, c){ 
    let max=Math.max (a,b,c);
    return max;
}

/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
function sum(arr){
    var total = 0;
	for (let i = 0; i < arr.length; i++) {
		total += arr[i];
	}
	return total;
}

/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
function multiply(arr){
    var total = 1;
	for (let i = 0; i < arr2.length; i++) {
		total = (total * arr2[i]);
	}
	return total;

}

/**
 * .
 * @param {str}.

 * @returns The sum of the two numbers.
 */
 function findLongestWord(str) {
    
    
  
    let longestWordLength = 0;
  
   for(var i = 0; i < str.length; i++){
     if(longestWordLength < str[i].length){
         longestWordLength = str[i].length;
        
     }
  }
  return longestWordLength;
  }


/**
 * 
 * @param {object} arr input array to be reversed.
 * @returns the orginal array with a revesed value.
 */

 function reverseArray(arr){
    let j=0;
    let temp;
    let leng=Math.floor(arr.length/2);
    for (let i=arr.length-1;i>=leng;i--){
        temp=arr[j];
        arr[j]=arr[i];
        arr[i]=temp;
        j++;
    }

    return arr;
}

/**
 * 
 * @param {Array} studentAnswer is Array; 
 * @param {Array} correctAnswers is Array;
 * @returns{Array} compute score;
 */
 function scoreExams(studentAnswer,correctAnswers){
    let score=[]
    for(let eachAnswer of studentAnswer ){
        let answer=0
        for(let i=0;i<eachAnswer.length;i++){
            if(eachAnswer[i]===correctAnswers[i])
                   answer++;   
        }
        score.push(answer)
    }
    return score;
}
module.exports = {findLongestWord,scoreExams,sum,multiply,reverseArray,maxOfThree}