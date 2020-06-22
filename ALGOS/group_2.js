    function print1To255 () {  //1
    for (var i = 1; i <= 255; i++) {
        console.log(i)
    }
}

function printOdds1to255() { //2
    for (var i = 0; i <= 255; i++){
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}

function printIntsAndSum0To255() { //3
    var total = 0;
    for (var i = 0; i <= 255; i++){
        console.log(i);
        console.log(total);
        total += i;
    }
}

function iterateAndPrintArray(arr) { //4
    for (var x = 0; x < arr.length; x++) {
        console.log(arr[x])
    }
}

function findAndPrintMax(arr) { //5
    var max = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    console.log(max);
}

function printAverageOfArray(arr) { //6
    var avg = 0;
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    avg = (sum/arr.length);
    console.log(avg);
}

function arrayWithOdds() { //7
    oddArr = [];
    for (var i = 1; i <= 255; i++) {
        if( i % 2 !== 0) {
            oddArr.push(i);
        }
    }
    return oddArr;
}

function squareTheValues(arr){ //8
    for (i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * arr[i];
    }
    return arr;
}

function greaterThanY(arr, y) { //9
    var count = 0
    for (var x = 0; x < arr.length; x++)
        if (arr[x] > y) {
            count++
        }
        console.log(count)
}

function zeroOutNegNumbers(arr) { //10
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0;
        }
    }
    return arr;
}

function maxMinAvg(arr) { //11
    var max = arr[0];
    var min = arr[0];
    var sum = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        } 
        if (arr[i] > max) {
            max = arr[i];
        }
        sum += arr[i];
    }
    console.log(min, max, sum/arr.length);
}

function shiftArrayValues(arr) { //12
    arr.shift();
    arr.push(0);
    return arr
}



function swapStringForArrayNegativeVals(arr) { //13
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 'Dojo'
        }
    }
    return arr;
}