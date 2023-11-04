const FetchData = () => {
  console.log("Searched..."); // code for API call Search after 400m seconds
};

const magicFuntion = (fun, time) => {
  let timeOut;
  return function () {
    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      FetchData.apply();
    }, time);
  };
};
const onChangeFun = magicFuntion(FetchData, 400);
