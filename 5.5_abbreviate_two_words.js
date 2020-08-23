
/*
Write a function to convert a name into initials. 
This kata strictly takes two words with one space in between them.
The output should be two capital letters with a dot separating them.
It should look like this:
Sam Harris => S.H
Patrick Feeney => P.F6.6
*/

let covertName = (str) => {
    let regex = /\s/;
    if(regex.test(str)){
        let newName = str.split(' ')
        if(newName.length === 2 ) {
            return newName.map(el => el[0]).join('.')
        }
        return 'only two words with one space in between them'
    }
    return 'incert two words with one space in between them'
}

console.log(covertName('osnat ari'))