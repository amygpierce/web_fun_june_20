function reverserArray(arr) {
    var newArr = [];
    for (var i = arr.length - 1; i <= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}

var arr = [1,2,3,4];
console.log(reverserArray(arr));

function revArr2(arr) {
    var temp = 0;
    for (var i = 0; i <= Math.floor((arr.length - 1)/2); i++) {
        temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}

console.log(revArr2(arr));


function moveZero(arr){
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {
            arr.splice(i, 1)
            count++;
        }
    }
    for (count; count >=0; count--) {
        arr.push(0);
    }
    return arr;
}

var arrWithZeros = [1,0,2,0,0,3,4,5];
console.log(moveZero(arrWithZeros));