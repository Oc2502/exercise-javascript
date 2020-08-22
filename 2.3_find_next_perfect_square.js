/*
Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter.
Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is positive.
*/


function findNextSquare(integer) {
    let nextSquare;
    if(Math.sqrt(integer) % 1 === 0) {
        nextSquare = (Math.sqrt(integer) + 1) ** 2;
    } else {
        return -1;
    }
    return nextSquare
}

console.log(findNextSquare(121));