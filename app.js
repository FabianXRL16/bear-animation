let audio = new Audio("./sound.mp3");
let j = 2;
function sound() {
  let on = document.querySelector(".on");
  let off = document.querySelector(".off");
  audio.volume = 0.1;
  audio.loop = true;
  audio.paused ? audio.play() : audio.pause();
  if (j % 2 === 0) {
    off.style.display = "none";
    on.style.display = "block";
    on.style.transform = "scale(1)";
  } else {
    on.style.display = "none";
    off.style.display = "block";
    off.style.transform = "scale(1)";
  }
  j = j + 1;
}
