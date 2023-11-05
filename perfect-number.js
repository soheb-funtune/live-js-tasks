let sum = 0;
let num = 25; // 6 & 28 is prefect
for (i = 1; i < num; i++) {
  if (num % i == 0) {
    sum = sum + i;
  }
}
if (num === sum) {
  console.log("number is perfect");
  console.log({ num, sum });
} else {
  console.log("error");
  console.log({ num, sum });
}
