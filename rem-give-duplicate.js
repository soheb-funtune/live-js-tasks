// remove given repeated value ?

let arr = [1, 2, 3, 4, 5, 4, 5, 4, 4, 3, 5, 2, 3];

const remFun = (num) => {
  if (arr.includes(num)) {
    arr.indexOf(num) !== arr.lastIndexOf(num);
    arr.splice(arr.lastIndexOf(num), 1);
  }
  arr.indexOf(num) !== arr.lastIndexOf(num) && remFun(num); // funtion recurtion is used here
};

remFun(5);
console.log(arr);
