/*
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. 
You don't have to worry with strings with less than two characters.
*/

string = 'hello'

function removeCharacters(str) {
    newString = str.slice( 1, -1 ) ;
    return newString;
}



console.log(removeCharacters(string));

// str slice => string.slice(where to start, the end). to count from the end, need wo write '-' . -1 