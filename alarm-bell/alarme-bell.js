let time = new Date();
// console.log(time.getMinutes().toString());

let audioEle = document.getElementById("myAudio");

const playAudio = () => {
  console.log("alarmBell called");
  audioEle.play();
};
let user = prompt("enter time");
console.log({ user }, 1000 * Number(user));

const AlarmBell = (second) => {
  setTimeout(() => {
    playAudio();
  }, 1000);
};

user && AlarmBell(user);
user && document.addEventListener("click", () => {});
