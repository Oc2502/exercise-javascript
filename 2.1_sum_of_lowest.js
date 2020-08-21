/*
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
[10, 343445353, 3453445, 3453545353453] should return 3453455.

*/


array = [3, 4, 1, 10, 30];


function returnTwoMinNumbers(array) {
    let smallestNumber = array[0];
    let smallestIndex;
    for(let i = 0; i < array.length; i++) {
        if(array[i] < smallestNumber) {
            smallestNumber = array[i];
            smallestIndex = i;
    }
    }
    console.log('this small', smallestNumber)

    let secondSmallestNumber =array[0];
    for(let j = 0; j< array.length; j++) {
        if((j !== smallestIndex) && (array[j] < secondSmallestNumber)){
            secondSmallestNumber = array[j];
        }
    }
    console.log('this second', secondSmallestNumber)

    let sum = smallestNumber + secondSmallestNumber;
    return sum
};

console.log(returnTwoMinNumbers(array));