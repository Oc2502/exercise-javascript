/*
Given an array of ones and zeroes, convert the equivalent binary value to an integer.
*/

array = [0, 0 , 1, 1, 0, 0, 1, 1, 0, 0 , 1, 1, 0, 0, 1, 1];

arrayToString = array.join('')
integerValue = parseInt(arrayToString, 2)

console.log(integerValue)