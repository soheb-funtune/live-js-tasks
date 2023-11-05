let arr = [1, 2, 3, 4, 5, 4, 5, 4, 4, 3, 5, 2, 3];

const removGivenDuplicate = (num) => {
  const res = arr?.filter(
    (item, index) => arr?.lastIndexOf(num) === index || item !== num // in first condition we are returning last index on given number || item !== given number
  );
  return res;
};

console.log(removGivenDuplicate(4));
