function highPass(arr, cutoff) {
    var filteredArr = [];
    // var arraylength = arr.length;
    for (var i=0; i<arr.length; i++) 
        if (arr[i]>cutoff) {
    filteredArr.push(i) }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]



function evensOfOddscopy(arr) {
    var totalOdds = 0;
    var totalEvens = 0;
    for (var i=0; i<arr.length; i++)
        if (i % 2 == 0) {
            arr[i]=i;
            arr.push(i);
        }
}

var result = evensOfOdds([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back "evens are larger"



function betterThanAverage(arr) {
    var sum = 0;
    // calculate the average
    var count = 0
    // count how many values are greated than the average
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4