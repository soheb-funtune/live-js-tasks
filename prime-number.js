const checkPrime = (num) => {
  for (i = 2; i < num; i++) {
    // checking modulus for every digit if one of the digit got modules 0 at same time returning "Not Prime msg"
    if (num % i === 0) {
      return "Not Prime number";
    }
  }
  // after executing above for() not returned any thing then we can consider that is prime
  return "This is Prime number";
};

console.log(checkPrime(21));
