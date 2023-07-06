var record_c = document.querySelector(".Record");
var recordNeedle = document.querySelector(".record-needle");
var recordDisc = document.querySelector(".record-image");
var playbutton = document.querySelector(".play-button");
var Music = document.getElementById("myMusic");
var DekuFace = document.querySelector(".BabyFace");
var ButtonText = document.querySelector(".PlayText");
var container = document.getElementById("gif-container");
var current_rotation = 0;
var NeedleReady = false;
var rotationInterval;

var RandomGifs = [
  "Images/Demon.gif",
  "Images/jotaro-kujo-dance.gif",
  "Images/dance-breakdance.gif",
  "Images/fortnite-dance.gif"
];

function MoveNeedle() {
  
  if(!playbutton.classList.contains('js-button')){
    removePreviousClass();
    playbutton.classList.add('js-button');
    DekuFace.src= 'Images/Deku-GigaFace.png'
    ButtonText.innerHTML = "Stop";
    NeedleReady = true;
  }else {
    playbutton.classList.remove('js-button');
    playbutton.classList.add('play-button');
    DekuFace.src= 'Images/Deku-BabyFace.png'
    ButtonText.innerHTML = "Play";
    NeedleReady = false;
  }
  current_rotation = 15;
  recordNeedle.style.transform = 'rotate(' + current_rotation + 'deg)';
  
  playMusic();
}

function removePreviousClass(){
  if (playbutton){
    playbutton.classList.remove('play-button');
  }
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
    } else {
      Music.pause();
      recordNeedle.classList.remove("RecordNeedle_Shake");
     
    }
  }, 400);
}

function rotateDisc() {
  if (NeedleReady) {
    current_rotation += 90; 
    recordDisc.style.transform = 'rotate(' + current_rotation + 'deg)';
  }
}
function RainGifs() {
  setTimeout(() => {
    if (NeedleReady) {
      var gif = document.createElement("img");
      gif.src = RandomGifs[Math.floor(Math.random() * RandomGifs.length)];
      gif.className = "gif";

      gif.style.left = Math.random() * window.innerWidth + "px";
      gif.style.top = "-100px";

      container.appendChild(gif);

      gif.style.animation = "rain 2s linear forwards";

      gif.addEventListener("animationend", function () {
        gif.remove();
      });
    }
  }, 15500);
}

var intervalId = setInterval(RainGifs, 500);


