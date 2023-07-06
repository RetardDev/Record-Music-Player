var record_c = document.querySelector(".Record");
var recordNeedle = document.querySelector(".record-needle");
var recordDisc = document.querySelector(".record-image");
var playbutton = document.querySelector(".play-button");
var Music = document.getElementById("myMusic");

var current_rotation = 0;
var NeedleReady = false;
var rotationInterval;
function MoveNeedle() {
  current_rotation = 15;
  recordNeedle.style.transform = 'rotate(' + current_rotation + 'deg)';
  NeedleReady = true;
  playMusic();
}

function playMusic() {
  setTimeout(() => {
    if (NeedleReady) {
      console.log("Playing");
      rotationInterval = setInterval(rotateDisc, 16); 
      Music.play();
      setTimeout(() => {
        console.log("MrBeast")
        recordNeedle.classList.add("RecordNeedle_Shake")
      }, 1000);
    }
  }, 400);
}

function rotateDisc() {
  if (NeedleReady) {
    current_rotation += 90; 
    recordDisc.style.transform = 'rotate(' + current_rotation + 'deg)';
  }
}

