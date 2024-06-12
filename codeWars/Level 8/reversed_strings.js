function solution(str) {

  //STEP 1: SPLIT THE WORD
  let splitString = str.split("");
  //  return splitString

  //STEP 2: REVERSE THE NEW CREATED ARRAY
  let reverseArray = splitString.reverse();
  // return reverseArray

  //STEP 3: JOIN ALL THE ELEMENTS OF THE ARRAY INTO A STRING
  let joinArray = reverseArray.join("");
  return joinArray
}

console.log(solution("Hello")); 
