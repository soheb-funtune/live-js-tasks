let arr = [40, 100, 1, 5, 25, 10];

// number array
console.log(arr.sort((a, b) => a - b)); // acending order
console.log(arr.sort((a, b) => b - a)); // decending order

// sting array
let strArray = ["Banana", "Orange", "Apple", "Mango"];

console.log(strArray.sort()); // acending order
console.log(strArray.sort()?.reverse()); // decending order
