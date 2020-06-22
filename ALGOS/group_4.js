

function reverseArr(arr) {
    var temp = [];
    for (var x = arr.length-1; x >= 0; x--) {
        temp.push(arr[x])
    }
    return temp
}

var output = reverseArr([1, 2, 3, 4, 5, 6, 7]);
console.log("Expected:[7,6,5,4,3,2,1]", output)

function reverseArr(arr) {
    for (var x = 0; x < (arr.length-1) / 2; x++) {
        var temp = arr[x]
        arr[x] = arr[arr.length-1-x]
        arr[arr.length-1-x] = temp
    }
    return arr
}

var output = reverseArr([1, 2, 3, 4, 5, 6, 7]);
console.log("Expected:[7,6,5,4,3,2,1]", output)


function moveZero(arr) {
    for (var i=0; i<arr.length; i++){
      if (arr[i]==0){
        arr.push(arr[i])
        arr.splice(i, 1)
      }
    }
  }