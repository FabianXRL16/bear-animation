let audio1 = new Audio("../../assets/sound/sound.mp3");
let audio2 = new Audio("../../assets/sound/sound2.mp3");

let $btnFloat = document.querySelector("#floatBtn");
let $container1 = document.querySelector(".container1");
let $container2 = document.querySelector(".container2");
let $body = document.querySelector("body");

let j = 2;

let $on = document.querySelector(".on");
let $off = document.querySelector(".off");
let $on2 = document.querySelector(".on2");
let $off2 = document.querySelector(".off2");

let btn = document.querySelector(".circle");
let btn2 = document.querySelector(".circle2");

function sound() {
  num ? (audio = audio1) : (audio = audio2);
  if (num) {
    audio = audio1;
    audio2.pause();
  } else {
    audio = audio2;
    audio1.pause();
  }
  audio.loop = true;
  audio.paused ? audio.play() : audio.pause();
  changeIcon(!audio.paused);
}

function changeIcon(e) {
  if (e) {
    $off.style.display = "none";
    $on.style.display = "block";
    $on.style.transform = "scale(1)";
    $off2.style.display = "none";
    $on2.style.display = "block";
    $on2.style.transform = "scale(1)";
    btn.style.animationName = "turn";
    btn2.style.animationName = "turn";
  } else {
    $on.style.display = "none";
    $off.style.display = "block";
    $off.style.transform = "scale(1)";
    $on2.style.display = "none";
    $off2.style.display = "block";
    $off2.style.transform = "scale(1)";
    btn.style.animationName = "";
    btn2.style.animationName = "";
  }
}

let num = true;

$btnFloat.addEventListener("click", changeSound);

function changeSound() {
  if (num) {
    $container1.style.transform = "scale(0)";
    $container2.style.transform = "scale(1)";
    $body.classList.add("colorBody2");
    $body.classList.remove("colorBody1");
    audio1.currentTime = 0;
    audio2.play();
    audio1.pause();
    audio2.loop = true;
  } else {
    $container1.style.transform = "scale(1)";
    $container2.style.transform = "scale(0)";
    $body.classList.add("colorBody1");
    $body.classList.remove("colorBody2");
    audio2.currentTime = 0;
    audio1.play();
    audio2.pause();
    audio1.loop = true;
  }
  changeIcon(true);
  num = !num;
}
