function findS(a, b, c){
  side = (a + b + c)/2;
  return side;
}
console.log("The side is:", findS(3, 5, 9));
console.log("");


function findArea(x, y, z){
let s = findS(x, y, z);
area = Math.sqrt(s * (s-x) * (s-y) * (s-z));
 return area;
}
console.log("Area is:" ,findArea(3, 5, 6));


////////////////////////////////////////////////
//