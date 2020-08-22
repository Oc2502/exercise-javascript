/*
Write a function called repeat_str which repeats the given string src exactly count times.
repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

*/


function repeat_str(n, str) {
    if(n > 0) {
        let repeatedString = str.repeat(n)
        console.log(repeatedString);
    } else {
        console.log('opps, choose a number bigger than 0')
    }
}

repeat_str(4, 'i')