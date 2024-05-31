//General Formula: (base * height)/2;

//we will take the base and height measurement from the user and will calculate
//the area of the right angled triangle.

function getArea(base, height){
 /*Calculates the area of a triangle given its base and height.

  Code:
      base: The base length of the triangle.
      height: The height of the triangle.

  Returns:
      The calculated area of the triangle.
  */ 
 area = (base * height) / 2;
 return area;
}

console.log(getArea(10, 4));