/*
There is an array with some numbers. All numbers are equal except for one. Try to find it!
findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

*/

array = [ 1, 1, 1, 1, 1, 2 ];
 
function findUniq(array) {
    let uniqNumber = array[0]
    let SameNumber =[];
    let notSameNumber =[];

    for(let i = 0; i < array.length; i++) {
        if(uniqNumber === array[i]) {
            SameNumber.push(array[i])
        } else {
            notSameNumber.push(array[i])
        }
    }
    if(notSameNumber.length === 1) {
        uniqNumber = notSameNumber;
    } else {
        uniqNumber =SameNumber;
    }
    return uniqNumber
}

console.log(findUniq(array))