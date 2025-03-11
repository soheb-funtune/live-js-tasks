let str = "testers"?.split("");
let str2 = "";
let len = str.length;
let last = str[len - 1];
let a = 0,
  b = 1;
for (i = 0; a <= Math.round(len / 2); i++) {
  str2 = str2 + str[b] + str[a];
  a = a + 2;
  b = b + 2;
}
if (str?.length % 2 === 0) {
  console.log({ str, str2 });
} else {
  str2 = str2 + last;
  console.log({ str, str2 });
}
