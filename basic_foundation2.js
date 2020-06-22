function evenOdd(arr){
    var even = 0;
    var odd = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] % 2== 0){
            even++
            odd = 0
            if(even == 3){
                console.log("EVEN MORE SO")
                even = 0;
            }
        }
        else{
            odd++
            even = 0
            if(odd == 3){
                console.log("THAT'S ODD")
                odd = 0
            }
        }
    }
}

// evenOdd([1,1,1,2,3,5])
// evenOdd([2,2,2,3,2,2,1,1,1])

// evenOdd([1,2,3,4,5,6,7])


function add(num1, num2){
    console.log("Summing Numbers!");
    console.log("num1 is: " + num1);
    console.log("num2 is: " + num2);
    var sum = num1 + num2;
    return sum;
}
var result1 = add(3,5);
var result2 = add(4,7);
console.log("RESULT 1: ",result1);
console.log("RESULT 2: ", result2);

