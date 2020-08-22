/*

The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.
Task :
Given a year, return the century it is in.
Input , Output Examples ::
centuryFromYear(1705)  returns (18)
centuryFromYear(1900)  returns (19)
centuryFromYear(1601)  returns (17)
centuryFromYear(2000)  returns (20)

*/
// this function is rigth only for ater year 0!!
function centuryFromYear(year) {
    let century;
    if(year > 0){
        if(year % 100 === 0 ) {
            century = year / 100 ;
        } else {
            century = parseInt(year / 100) + 1;
        }
        console.log(century);
    } else {
        console.log(`can't find`);
    }
}
        

centuryFromYear(851)


// another option:

//The Math.ceil() function always rounds a number up to the next largest integer.

// function century(year) {
//     return Math.ceil(year / 100);
// }

// console.log(century(851));
