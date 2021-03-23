"use strict";
/**
 * 
 * @param {number} a is a number
 * @param {number} b is a number 
 * @param {number} c is a number
 * @returns {number} largest of a, b, c
 */


function maxOfThree(a, b, c){ 
    if(a<0) a=-1*a;
    if(b<0) b=-1*b;
    if(c<0) c=-1*c;
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
	for (let i = 0; i < arr.length; i++) {
		total = (total * arr[i]);
	}
	return total;

}

/**
 * .
 * @param {str}.

 * @returns The sum of the two numbers.
 */
 function findLongestWord(str) {
    let longestWord = str[0];
  
   for(var i = 0; i < str.length; i++){
     if(longestWord.length < str[i].length){
         longestWord= str[i];
        
     }
  }
  return longestWord;
  }


/**
 * 
 * @param {object} arr input array to be reversed.
 * @returns the orginal array with a revesed value.
 */

 function reverseArray(arr){
    let revWord=[];
    for (let i=arr.length-1;i>=0;i--){
        revWord.push(arr[i])
    }

    return revWord;
}
/**
 * 
 * @param {*} arr 
 * @returns 
 */
function reverseArrayInPlace(arr){
    let revWord=[];
    for (let i=arr.length-1;i>=0;i--){
        revWord.push(arr[i])
    }

    return revWord
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
module.exports = {findLongestWord,scoreExams,sum,multiply,reverseArray,maxOfThree,reverseArrayInPlace}