let arr = [40, 100, 1, -5, 25, 10];

const maxVal = (maxMin) => {
  let maxVariable = arr[0];
  arr?.forEach((item) => {
    if (maxMin === "min" ? maxVariable > item : maxVariable < item)
      maxVariable = item;
  });
  return maxVariable;
};

console.log(maxVal()); // by default this funtion will return MAX value
console.log(maxVal("min")); // if we pass parameter "min" it will return minimum value of array
