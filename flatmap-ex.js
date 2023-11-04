const arr = [1, 2, 3, 4, 5];

const res = arr?.flatMap((item) => [item]); // it will not return item in [] even-if we are returning in Array []

console.log({ res });
