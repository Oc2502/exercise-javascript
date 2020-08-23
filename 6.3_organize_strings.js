/*
Take 2 strings s1 and s2 including only letters from a to z. 
Return a new sorted string, the longest possible, containing distinct letters,

each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

*/


let longest = (a, b) => {
    let reg = /^[a-zA-Z]+$/
    if(reg.test(a) && reg.test(b)) {
        longestWord =[];
        newArray = a.toLowerCase().split('').concat(b.toLowerCase().split('')).forEach(el => {
            if(longestWord.includes(el)){
                return ''
            } else {
                longestWord.push(el) 
            }
            
        });
        return longestWord.join('')
    }
    return 'use letters only!'
  
}

console.log(longest('asd', 'sDa'))