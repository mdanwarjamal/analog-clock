const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");
var date = new Date();

var hr = date.getHours();
var min = date.getMinutes();
var sec = date.getSeconds();

let secPosition = sec * (360 / 60);
let minPosition = min * (360 / 60) + secPosition / 60;
let hrPosition = hr * (360 / 12) + minPosition / 12;

function runTheClock() {
  secPosition = secPosition + 6;
  minPosition = minPosition + 0.1;
  hrPosition = hrPosition + 1 / 120;

  HOURHAND.style.transform = `rotate(${hrPosition}deg)`;
  MINUTEHAND.style.transform = `rotate(${minPosition}deg)`;
  SECONDHAND.style.transform = `rotate(${secPosition}deg)`;
}
setInterval(runTheClock, 1000);
