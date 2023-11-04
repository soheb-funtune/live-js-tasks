// find middle index value replace with 0 if odd if enen add 2 middle value and set to middle

let arr = [1, 2, 3, 4, 5, 6];

let middleIndex = Math.floor(arr?.length / 2);

if (arr.length % 2 === 0) {
  arr?.splice(middleIndex - 1, 2, arr[middleIndex - 1] + arr[middleIndex]); // adding 2 middle value and placing result in middle
  console.log({ arr });
} else {
  arr?.splice(middleIndex, 1, 0); // replacing middle value with 0
  console.log({ arr });
}
