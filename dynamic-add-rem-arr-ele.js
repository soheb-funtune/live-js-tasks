let arr = [10, 20, 30, 40, 55];

const addAndRemove = (index, value) => {
  value === "remove" ? arr?.splice(index, 1) : arr?.splice(index, 0, value);
};

addAndRemove(2, 55);
console.log(arr);
addAndRemove(2, "remove"); // if we pass first para ( index ) and second para ( "remove") if will remove specifed index value
console.log(arr);
