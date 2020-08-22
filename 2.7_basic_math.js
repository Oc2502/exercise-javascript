/*
Your task is to create a function that does four basic .
The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.
Examples
basicOp('+', 4, 7)         // Output: 11
basicOp('-', 15, 18)       // Output: -3
basicOp('*', 5, 5)         // Output: 25
basicOp('/', 49, 7)        // Output: 7
*/


// eval() return value => undefined
function basicMath(operation, value1, value2) {
    argToArray = [ value1, operation, value2]
    console.log(argToArray)

    console.log(eval(argToArray.join('')))
}

basicMath('**', 12, 4);


