function Print1To255(){
    for (var i=1; i<256; i++){
        console.log(i)
    }
}

function PrintOdds1To255(){
    for (var i=1; i<256; i++){
        if (i%2==1){
            console.log(i)
        }
    }
}

function PrintIntsAndSum0to255(){
    var sum = 0;
    for(var i = 0; i <= 255; i ++){
        console.log(i)
        sum = sum + i
        console.log(sum)
    }
}

function PrintArrayVals(arr){
    for(var i = 0; i < arr.length; i++){
        console.log(arr[i])
    }
}


function PrintMaxOfArray(arr){
    var max = 0;
    for (var i=0; i<arr.length; i++){
        if (max<arr[i]){
            max = arr[i];
        }
    }
    return max
}

function PrintAvgOfArray(arr){
    var avg = 0;
    var sum = 0;
    for( var i = 0; i < arr.length; i ++){
        sum+= arr[i]
    }
    avg = sum / arr.length
    console.log(avg)
}

function ReturnOddsArray1To255(){
    var newArr = [];
    for (var i=1; i<256; i++){
        if (i%2==1){
            newArr.push(i)
        }
    }
    return newArr;
}

function SquareArrayValues(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] *= arr[i];
    }
    return arr;
}

function ArrayCountGreaterThanY(arr, Y){
    var count = 0;
    for(var i = 0; i < arr.length; i ++){
        if(arr[i] > Y){
            count ++
        }
    }
    return count;
}

function ZeroOutArrayNegativeVals(arr){
    for(var i = 0; i < arr.length; i ++){
        if(arr[i] < 0){
            arr[i] = 0;
        }
    }
    return arr[i]
}