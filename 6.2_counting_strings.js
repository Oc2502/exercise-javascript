/*
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more
than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/


/*psudo code - 
1. what i want to find : number of duplicate letters
2. how to do it? 
a-  get a string 
b- turn the string to array of letters
c- get the letters to an object with loop. the value is the number of repetition
d- need to count number of values >= 2
e- return the count
 */
function countDuplicates(str) {

    let objectOfLetters = {}
    let count = 0; 

    let arrayOfLetters = str.toLowerCase().split('')
    console.log(arrayOfLetters)
    arrayOfLetters.forEach((el) => {
        objectOfLetters[el] ? objectOfLetters[el] += 1 : objectOfLetters[el] = 1;
        
    });

    Object.values(objectOfLetters).forEach((letter) => {
        letter > 1 ? count ++ : count;
    
    })
    return count;

}

console.log(countDuplicates("aabbcde"));