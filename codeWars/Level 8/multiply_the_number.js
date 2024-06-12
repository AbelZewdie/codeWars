/*
Jack really likes his number five: the trick here is that you have to multiply 
each number by 5 raised to the number of digits of each numbers, so, 

for example:
            A     B
  3 -->    (  3 * 5¹)       15
 10 -->    ( 10 * 5²)       250
200 -->    (200 * 5³)       25000 
  0 -->    (  0 * 5¹)       0   
 -3 -->    ( -3 * 5¹)      -15  
 */

 function multiply(a) {
  // Handle zero and negative numbers separately
  if (a === 0) {
    return 0;
  } else {
    const numDigits = String(Math.abs(a)).length; // Get number of digits (absolute value)
    const result = Math.sign(a) * (5 ** numDigits) * Math.abs(a);
    return result;
  }
}

// Test cases
const numbers = [3, 10, 200, 0, -3];
const results = numbers.map(multiply);

console.log(results); // Output: [15, 250, 25000, 0, -15]


result = multiply(-3)
console.log(typeof result);
console.log(result);

// CLEVER WAY TO DO IT
/*
function multiply(number){
  //your code here
  let numStr = number.toString().replace("-", "");
  return number* Math.pow(5,numStr.length)
}
*/