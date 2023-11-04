// ** shalow copy
const array1 = [1, 2, 3];

const array2 = array1;
// in this copy if we modify array2 that changes also reflect on array1

// ** deepcopy

const arr1 = ["soheb", "salim", "sayyad"];

const arr2 = [...arr1]; // this way changes of arr2 will not reflect on arr1. Before spred operator (...var) we were using Object.assign(oldArray)

// ** object deep copy

const obj1 = {
  name: "soheb",
  age: 24,
  address: {
    home: "nanded",
    office: "Hyderabad",
  },
};

// in this nested Object case spress (...) operator and Object.assign(oldObj)  will not work
// In case of copying Nested Object we can Json.parse(Json.stringify(object_Name))

const obj2 = JSON.parse(JSON.stringify(obj1));
obj1.name = "Sayyad Soheb";
console.log({ obj1, obj2 });
