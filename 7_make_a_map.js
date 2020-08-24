/*
Implement the following methods -
Filter
ForEach
Map
Using only for(), array and objects (without other js methods) 
Find Bugs \ Debug Code
Bug !!!!! 


*/

array = [ 1, 2, 3, 4, 5, 6]

// -------------------Map------------------
array.myMap = function (callback){
	let newArray = [];
	for(let i = 0; i < this.length; i++ ){
		newArray[i] = callback(this[i]);
	}
	return newArray;
}

console.log(originalArray.myMap(element => element + 10));

// ----------------forEach -----------------
array.myForEach = function(callback){
	for(let i = 0; i < this.length; i++ ){
	    callback(this[i]);
	}
}
console.log(originalArray.myForEach(element => console.log(element)));

// --------------------- Filter ------------

array.myFilter = function(callback){
	let newArr = [];
	for(let i = 0; i < this.length; i++ ){
		if(callback(this[i])){
			newArr.push(this[i]);
		}
	}
	return newArr;
}
console.log(originalArray.myFilter(element => element > 2 ));

