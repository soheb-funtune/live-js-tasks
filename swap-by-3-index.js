let str = "testersx"?.split("");
let str2 = "";
let forLen = Math.floor(str?.length / 3);
let len = str?.length % 3;
let evenBy3 = str?.length % 3 === 0;

let a = 0,
  b = 2;

for (i = 1; i <= forLen; i++) {
  str2 = str2 + str[b] + str[a + 1] + str[a];
  a = a + 3;
  b = b + 3;
}
if (evenBy3) {
  console.log({ str, str2, forLen, len });
} else {
  let last2 = str?.slice(-2)?.reverse()?.join("");
  str2 = str2 + (len > 1 ? last2 : str[str.length - 1]);

  console.log({ str, str2, forLen, len, last2 });
}
