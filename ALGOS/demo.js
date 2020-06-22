// R - REITERATE
// I - INPUT
// O - OUTPUT
// T - TEST CASES

// Given an array, reverse the numbers within the array.
// Create a new array and return that array
function reverserArr(arr){
    var newArr = []
    for(var i = arr.length-1; i >=0 ;i--){
        newArr.push(arr[i])
    }
    return newArr
}

function revArr(arr){
    console.log("ARR LENGTH IS: ", Math.floor((arr.length)/2))
    for(var i = 0; i < Math.floor((arr.length)/2);i++){
        var temp = arr[i]
        arr[i] = arr[arr.length-1-i]
        arr[arr.length-1-i] = temp
    }
    return arr
}

var test = [1,2,3,4,5,6,7]
var test1 = [1,2,3,4,5,6,7,8]
console.log(revArr(test))
console.log(revArr(test1))

// MONDAY ALTERNATE
function moveZero(arr){

}
// Given an array, move all the zeroes to back of array
// You may return a new array or for BONUS do it in-place with the help of the splice() method
// [1,0,2,0,0,3,4,5] => [1,2,3,4,5,0,0,0]