let string = 'what is the shortest word '


function shortestWord(array){
    stringToArray = string.split(' ')
    console.log(stringToArray)
    let shorter = stringToArray[0]

    for(let i = 1; i < stringToArray.length; i++){
        if (stringToArray[i] < shorter) {
            shorter = stringToArray[i];
        } else {
            shorter;
        }
    }
    console.log(shorter)
}

shortestWord(string);