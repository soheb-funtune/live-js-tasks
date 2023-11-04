let arr = [2, 1, 4, 3, 8, 5, 6];

const maxVal = Math.max(...arr);

// const sortFuntion = () => {
//   console.log(arr[arr.length - 1]);
//   arr = arr.sort((a, b) => a - b);
//   maxVal !== arr[arr.length - 1] && sortFuntion();
// };

// sortFuntion();

// sorting in asending order
console.log(arr.sort((a, b) => a - b));
// sorting in descending order
console.log(arr.sort((a, b) => b - a));
