let obj = { b: "Banana", o: "Orange", a: "Apple", m: "Mango" };

let objKeys = Object.keys(obj)?.sort(); // here we accessed all keys and sort that

let newObje = {};
objKeys?.forEach((item) => {
  return (newObje[item] = obj[item]); // here we are setting data in newObje from old Object in sorted order
});

console.log("Object sorted based on Keys:", newObje);
