let arr = [1, 2, [3, 4], [5, [4, [5, 4], 4], 3], 5, 2, 3];

//  simple flat
console.log(arr?.flat());
//   flat by give value
console.log(arr?.flat(2));
//  infinity flat
console.log(arr?.flat(Infinity));
