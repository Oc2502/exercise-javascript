/*

*/

let someString = 'abcd'
let reg = /^[a-zA-Z]+$/

function mumbling(string) {
    
    if(reg.test(string)) {

        let mumblingStr = string.split('').map((elemnt, i) =>{
            newEl = elemnt.charAt(0).toUpperCase()
            newEl += elemnt.repeat( i+ 1)
            return newEl
        }).join('-')
        
        console.log(mumblingStr)
    } else {
        console.log('use letters only!')
    }
}

mumbling(someString)
