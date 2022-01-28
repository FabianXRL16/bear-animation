// Sounds
let audio1 = new Audio("../../assets/sound/sound1.mp3");
let audio2 = new Audio("../../assets/sound/sound2.mp3");
let audio3 = new Audio("../../assets/sound/sound3.mp3");
let audio4 = new Audio("../../assets/sound/sound4.mp3");
let audio5 = new Audio("../../assets/sound/sound5.mp3");
let audio6 = new Audio("../../assets/sound/sound6.mp3");
let audio7 = new Audio("../../assets/sound/sound7.mp3");

// Infinity Repro
audio1.loop = true;
audio1.pause();
audio2.loop = true;
audio3.loop = true;
audio4.loop = true;
audio5.loop = true;
audio6.loop = true;
audio7.loop = true;

// Globals
let $back = document.querySelector("#back");
let $next = document.querySelector("#next");
let $container1 = document.querySelector(".container1");
let $container2 = document.querySelector(".container2");
let $container3 = document.querySelector(".container3");
let $container4 = document.querySelector(".container4");
let $container5 = document.querySelector(".container5");
let $container6 = document.querySelector(".container6");
let $container7 = document.querySelector(".container7");
let $body = document.querySelector("body");

let j = 2;

// Btn play item
let $on1 = document.querySelector(".on-1");
let $off1 = document.querySelector(".off-1");

let $on2 = document.querySelector(".on-2");
let $off2 = document.querySelector(".off-2");

let $on3 = document.querySelector(".on-3");
let $off3 = document.querySelector(".off-3");

let $on4 = document.querySelector(".on-4");
let $off4 = document.querySelector(".off-4");

let $on5 = document.querySelector(".on-5");
let $off5 = document.querySelector(".off-5");

let $on6 = document.querySelector(".on-6");
let $off6 = document.querySelector(".off-6");

let $on7 = document.querySelector(".on-7");
let $off7 = document.querySelector(".off-7");

// Btn animtion item
let btn1 = document.querySelector(".circle1");
let btn2 = document.querySelector(".circle2");
let btn3 = document.querySelector(".circle3");
let btn4 = document.querySelector(".circle4");
let btn5 = document.querySelector(".circle5");
let btn6 = document.querySelector(".circle6");
let btn7 = document.querySelector(".circle7");

// Current Sound

let currentSound = 1;

function sound(i) {
  currentSound = i;
  if (i === 1) {
    audio1.loop = true;
    audio1.paused ? audio1.play() : audio1.pause();
    changeIcon(!audio1.paused);
  } else if (i == 2) {
    audio2.loop = true;
    audio2.paused ? audio2.play() : audio2.pause();
    changeIcon(!audio2.paused);
  } else if (i == 3) {
    audio3.loop = true;
    audio3.paused ? audio3.play() : audio3.pause();
    changeIcon(!audio3.paused);
  } else if (i == 4) {
    audio4.loop = true;
    audio4.paused ? audio4.play() : audio4.pause();
    changeIcon(!audio4.paused);
  } else if (i == 5) {
    audio5.loop = true;
    audio5.paused ? audio5.play() : audio5.pause();
    changeIcon(!audio5.paused);
  } else if (i == 6) {
    audio6.loop = true;
    audio6.paused ? audio6.play() : audio6.pause();
    changeIcon(!audio6.paused);
  } else {
    audio7.loop = true;
    audio7.paused ? audio7.play() : audio7.pause();
    changeIcon(!audio7.paused);
  }
}

function changeIcon(e) {
  if (e) {
    $off1.style.display = "none";
    $off2.style.display = "none";
    $off3.style.display = "none";
    $off4.style.display = "none";
    $off5.style.display = "none";
    $off6.style.display = "none";
    $off7.style.display = "none";
    $on1.style.display = "block";
    $on2.style.display = "block";
    $on3.style.display = "block";
    $on4.style.display = "block";
    $on5.style.display = "block";
    $on6.style.display = "block";
    $on7.style.display = "block";
    $on1.style.transform = "scale(1)";
    $on2.style.transform = "scale(1)";
    $on3.style.transform = "scale(1)";
    $on4.style.transform = "scale(1)";
    $on5.style.transform = "scale(1)";
    $on6.style.transform = "scale(1)";
    $on7.style.transform = "scale(1)";
    btn1.style.animationName = "turn";
    btn2.style.animationName = "turn";
    btn3.style.animationName = "turn";
    btn4.style.animationName = "turn";
    btn5.style.animationName = "turn";
    btn6.style.animationName = "turn";
    btn7.style.animationName = "turn";
  } else {
    $off1.style.display = "block";
    $off2.style.display = "block";
    $off3.style.display = "block";
    $off4.style.display = "block";
    $off5.style.display = "block";
    $off6.style.display = "block";
    $off7.style.display = "block";
    $on1.style.display = "none";
    $on2.style.display = "none";
    $on3.style.display = "none";
    $on4.style.display = "none";
    $on5.style.display = "none";
    $on6.style.display = "none";
    $on7.style.display = "none";
    $on1.style.transform = "scale(0)";
    $on2.style.transform = "scale(0)";
    $on3.style.transform = "scale(0)";
    $on4.style.transform = "scale(0)";
    $on5.style.transform = "scale(0)";
    $on6.style.transform = "scale(0)";
    $on7.style.transform = "scale(0)";
    btn1.style.animationName = "";
    btn2.style.animationName = "";
    btn3.style.animationName = "";
    btn4.style.animationName = "";
    btn5.style.animationName = "";
    btn6.style.animationName = "";
    btn7.style.animationName = "";
  }
}

function changeSound(i) {
  currentSound += i;
  if (currentSound === 8) currentSound = 1;
  if (currentSound === 0) currentSound = 7;
  if (currentSound === 7) {
    audio7.play();
    audio1.pause();
    audio6.pause();
    $container1.style.transform = "scale(0)";
    $container6.style.transform = "scale(0)";
    $container7.style.transform = "scale(1)";
    $body.classList.add("colorBody7");
    $body.classList.remove("colorBody1");
    $body.classList.remove("colorBody6");
    audio7.currentTime = 0;
    changeIcon(!audio7.paused)
  }
  if (currentSound === 1) {
    audio1.play();
    audio2.pause();
    audio7.pause();
    $container2.style.transform = "scale(0)";
    $container7.style.transform = "scale(0)";
    $container1.style.transform = "scale(1)";
    $body.classList.add("colorBody1");
    $body.classList.remove("colorBody2");
    $body.classList.remove("colorBody7");
    audio1.currentTime = 0;
    changeIcon(!audio1.paused)
  }
  if (currentSound === 2) {
    audio2.play();
    audio1.pause();
    audio3.pause();
    $container1.style.transform = "scale(0)";
    $container3.style.transform = "scale(0)";
    $container2.style.transform = "scale(1)";
    $body.classList.add("colorBody2");
    $body.classList.remove("colorBody1");
    $body.classList.remove("colorBody3");
    audio2.currentTime = 0;
    changeIcon(!audio2.paused)
  }
  if (currentSound === 3) {
    audio3.play();
    audio2.pause();
    audio4.pause();
    $container2.style.transform = "scale(0)";
    $container4.style.transform = "scale(0)";
    $container3.style.transform = "scale(1)";
    $body.classList.add("colorBody3");
    $body.classList.remove("colorBody2");
    $body.classList.remove("colorBody4");
    audio3.currentTime = 0;
    changeIcon(!audio3.paused)
  }
  if (currentSound === 4) {
    audio4.play();
    audio3.pause();
    audio5.pause();
    $container3.style.transform = "scale(0)";
    $container5.style.transform = "scale(0)";
    $container4.style.transform = "scale(1)";
    $body.classList.add("colorBody4");
    $body.classList.remove("colorBody3");
    $body.classList.remove("colorBody5");
    audio4.currentTime = 0;
    changeIcon(!audio4.paused)
  }
  if (currentSound === 5) {
    audio5.play();
    audio4.pause();
    audio6.pause();
    $container4.style.transform = "scale(0)";
    $container6.style.transform = "scale(0)";
    $container5.style.transform = "scale(1)";
    $body.classList.add("colorBody5");
    $body.classList.remove("colorBody4");
    $body.classList.remove("colorBody6");
    audio5.currentTime = 0;
    changeIcon(!audio5.paused)
  }
  if (currentSound === 6) {
    audio6.play();
    audio5.pause();
    audio7.pause();
    $container5.style.transform = "scale(0)";
    $container7.style.transform = "scale(0)";
    $container6.style.transform = "scale(1)";
    $body.classList.add("colorBody6");
    $body.classList.remove("colorBody5");
    $body.classList.remove("colorBody7");
    audio6.currentTime = 0;
    changeIcon(!audio6.paused)
  }
}
