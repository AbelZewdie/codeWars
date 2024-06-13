/*
Given two int values, return their sum. Unless the two values are the same, then return double their sum.

Examples

sumDouble(1, 2) → 3
sumDouble(3, 2) → 5
sumDouble(2, 2) → 8
*/

function sumDouble(a, b){
  if(a !== b){
    let sum = (a + b);
    return sum;
  }else if(a === b){
    let multi = ((a + b)*2);
    return multi;
  }
}

console.log(sumDouble(3, 3));