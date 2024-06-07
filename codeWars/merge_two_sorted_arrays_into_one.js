/* You are given two sorted arrays that both only contain integers.
Your task is to find a way to merge them into a single one, sorted
in asc order. Complete the function mergeArrays(arr1, arr2), where 
arr1 and arr2 are the original sorted arrays.

You don't need to worry about validation, 
since arr1 and arr2 must be arrays with 0 or more Integers. If both 
arr1 and arr2 are empty, then just return an empty array.

Note: arr1 and arr2 may be sorted in different orders. Also arr1 
and arr2 may have same integers. Remove duplicated in the returned result.*/


function mergeArrays(arr1, arr2) {
  // Handle empty arrays
  if (arr1.length === 0 && arr2.length === 0) {
    return [];
  }

  // Initialize pointers for iterating through each array
  let i = 0;
  let j = 0;

  // Create a new array to store the merged and sorted elements
  const merged = [];

  // Loop until both arrays are exhausted
  while (i < arr1.length && j < arr2.length) {
    // Compare elements and push the smaller one
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i++]);
    } else if (arr1[i] > arr2[j]) {
      merged.push(arr2[j++]);
    } else {
      // Handle duplicates: only push the first occurrence
      merged.push(arr1[i]);
      i++; // Skip duplicate in arr1
      j++; // Skip duplicate in arr2 (optional, since duplicates are removed later)
    }
  }

  // Add remaining elements from either array (if any)
  merged.push(...arr1.slice(i));
  merged.push(...arr2.slice(j));

  return merged;
}

let arr1 = ["1", "2", "3", "4", "5"];
let arr2 = ["6", "7", "8", "9", "10"];
console.log(mergeArrays(arr1, arr2));