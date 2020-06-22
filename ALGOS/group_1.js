// 1 Print 1-255
function print1To255() {
  for (var i = 1; 1 < 256; i++) {
    console.log(i);
  }
}

// 2 Print Odds 1-255
function printOdd1To255() {
  for (var i = 1; i <= 255; i++) {
    if (i % 2 == 1) {
      console.log(i);
    }
  }
}

// 3 Print Ints and Sum 0-255
function printIntsAndSum0To255() {
  var sum = 0;
  for (var i = 0; i <= 255; i++) {
    sum += i;
    console.log(i);
    console.log(sum);
  }
}

// 4 Iterate and Print Array
function printArr(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// 5 Find and Print Max
function FindPrintMax(arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; i++){
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    console.log(max);
}

var arr = [1,2,3,4];
FindPrintMax(arr);

function PrintAverageOfArray(arr){
    var avg = 0;
    for (var i=0; i<arr.length; i++){
      avg+=arr[i];
    }
    return avg/arr.length;
}
console.log(PrintAverageOfArray(arr))

function ReturnOddsArray1To255(){
    var arr = [];
    for (var i=1; i<256; i++){
      if (i%2==1){
        arr.push(i)
      }
    }
    return arr;
}
console.log(ReturnOddsArray1To255())


function squareArrayVals(arr) {
  for (var i = 0; i < arr.length; i++){
    arr[i] = arr[i]*arr[i]
  }
}
var myArray = [2, 5, 6]
squareArrayVals(myArray)
console.log(myArray)