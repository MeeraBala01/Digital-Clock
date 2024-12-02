const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");
const apEl = document.getElementById("ap");

function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ap = "AM";

  if (h > 12) {
    h = h - 12;
    ap = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hourEl.innerText = h;
  minuteEl.innerText = m;
  secondEl.innerText = s;
  apEl.innerText = ap;

  function myTimeOut(){
    setTimeout(updateClock,1000);
  }

  myTimeOut();

}

updateClock();