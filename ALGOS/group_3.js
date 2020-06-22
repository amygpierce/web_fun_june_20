function moveZero(arr) {
    
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {
            arr.splice(i, 1);
            arr.push(0)
        }
    }

    return arr;
}

function arrayReverse(arr){
    var newArray = [];
    for (var i = arr.length - 1; i>= 0; i--) {
        newArray.push(arr[i]);
    }
    return newArray;
}

function revArr(arr) {

    for (var i = 0; i < arr.length/2 ; i++) {
        var temp = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = arr[i]
        arr[i] = temp;
    }

    return arr
}