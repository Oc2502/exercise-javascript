/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
Implement a function that determines whether a string that contains only letters is an isogram. 
Assume the empty string is an isogram. Ignore letter case.

isIsogram("Dermatoglyphics") == true
isIsogram("aba") == false
isIsogram("moOse") == false // -- ignore letter case

*/


let ifIsogram = (str) => {
    let reg = /^[a-zA-Z]+$/
    if(reg.test(str)) {
        const temp ={};
        let result;
        newArray = str.toLowerCase().split('')
        newArray.forEach((el) => {
           if(temp[el]) {
               temp[el] += 1
           } else {
               temp[el] = 1
           }
            result = temp[el] <= 1  ? true : false;
        });

        return result
      
    }
    return 'use letters only!'
  
}

console.log(ifIsogram('qwertyuiop'))