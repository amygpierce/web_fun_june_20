// PREDICT THE OUTPUT
for (var num = 0; num < 15; num++) {
    console.log(num);
    // Increment here
}
// num = 0 , num < 15 --> true
// console.log(num) --> 0
// num++ --> 1

// num = 1 , num < 15 --> true
// console.log(num) --> 1
// num++ --> 2

// num = 2 , num < 15 --> true
// console.log(num) --> 2
// num++ --> 3

// this keep happening until 
// num = 16 , num < 15 --> false
// 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14
for (var i = 1; i < 10; i += 2) {
    if (i % 3 == 0) {
        console.log(i);
    }
}
// 3, 9

for (var j = 1; j <= 15; j++) {
    if (j % 2 == 0) {
        j += 2;
    }
    else if (j % 3 == 0) {
        j++;
    }
    console.log(j);
}





// j = 1, log 1... j is 1, skips if and else if to log 1
// j = 2, log 4... j is incremented by for loop, now meets if condition, j += 2, to log 4, but then is incremented by for loop
// j = 5, log 5... j now = 5, does not meet if or else if condition, log 5
// j = 6, log 8... j is incremented by for loop, now meets if condition, j =+ 2, to log 8, then then is incremented by for lop
// j = 9, log 10... j is now 9, meets else if of % 3, but is incremented by 1, so log 10....
// j = 11, log 11
// j = 12, log 14
// j = 14, log 16