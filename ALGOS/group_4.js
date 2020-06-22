function print1to255() { //1
    for (var x = 1; x <= 255; x++)
    console.log(x)
}
function printOdds1to255() { //2
    
    for (var i = 0; i <= 255; i++) {
        if (i % 2 !== 0){
            console.log(i)
        }
    }
}
function printIntsAndSum0to255 (){  //3
    var sum = 0;
    for (var i = 0; i <= 255; i+++) {
        sum += i
        console.log(i);
        console.log(sum);
    }
}
function iterateAndPrintArray(arr){//4
    for (var x = 0; x < arr.length; x++) {
        console.log(arr[x])
    }
}
function findAndPrintMax(arr){//5
    var max = 0
    for (var x = 0; x < arr.length; x++) {
        if (arr[x] > max) {
            max = arr[x]
        }
        console.log(max)
    }
}
function printAverageOfArray(arr) { //6
    var avg = 0;
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    avg = sum/arr.length
}
function arrayWithOdds(){//7
    var newArr = []
    for (var x = 1; x <= 255; x++) {
        if (x % 2 == 1) {
            newArr.push(x)
        }
    }
}
function squareArrayVals(arr) { //8
    for (var i = 0; i < arr.length; i++){
        arr[i] = arr[i] * arr[i];
    }
    return arr;
}

function greaterThanY(arr, y) {//9
    var greater = 0
    for (var x = 0; x < arr.length; x++) {
        if (arr[x] > y) {
            greater++
        }
    }
    console.log(greater)
}
function zeroOutArrayNegativeVals(arr) {//10
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] < 0) {
            arr[i] = 0;
        }
    }
    return arr
}

function maxMinAve(arr) {//11
    var max = arr[0];
    var min = arr[0];
    var avg = 0;
    for (var x = 0; x < arr.length; x++) {
        
    }
}

function shiftArrayValsLeft(arr) { //12
    
}

function reverseArr(arr) {
    for (var i = 0; i < arr.length; i)
}


