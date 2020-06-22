function reverseArray(arr) {
  var newArr = [];
  while (arr.length > 0) {
    newArr.push(arr.pop());
  }
  return newArr;
}

function reverseArray(arr) {
  var newArr = [];
  for (var i=arr.length-1; i > -1; i--) {
    newArr[i]= arr[i]
  }
  return newArr;
}
 
tion reversealt(arr) {

 

  

}

function reverseArray(arr) {
  var mid = Math.floor(arr.length / 2);
  for (var i = 0; i < mid; i++) {
    var end = arr.length - 1 - i;
    var temp = arr[i];
    arr[i] = arr[end];
    arr[end] = temp;
  }
}
var arr = [1,2,0,3,4]
var zero = arr.splice(i, 1); [0]

function moveZero(arr) {
  for (var i=0; i<arr.length; i++){
    if (arr[i]==0){
      arr.push(arr[i])
      arr.splice(i, 1)
    }
  }
}
