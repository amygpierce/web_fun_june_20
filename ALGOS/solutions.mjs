function reverserArr(arr){
    var newArr = []
    for(var i = arr.length-1; i >=0 ;i--){
        newArr.push(arr[i])
    }
    return newArr
}
function revArr(arr){
    for(var i = 0; i < Math.floor((arr.length)/2);i++){
        var temp = arr[i]
        arr[i] = arr[arr.length-1-i]
        arr[arr.length-1-i] = temp
    }
    return arr
}