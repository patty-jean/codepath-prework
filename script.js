// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var pattern = [];   //8 numbers
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;
var keyBt;
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var err = 0;

for (let i=0; i < 8; i++){
  var number = Math.floor(Math.random() * 6) + 1;
  pattern.push(number);
}

function startGame(){
  //initialize game variables
  progress = 0;
  gamePlaying = true;
  clueHoldTime = 1000;

  err = 0;
  
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame(){
  //change game variables
  console.log("game stopped");
  gamePlaying = false;

  
  // swap the Start and Stop buttons
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("startBtn").classList.remove("hidden");
}



function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}

function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}


function playNote(btn){
  document.getElementById("i"+btn).play();
}






function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playNote(btn);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  context.resume()
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }

}


function loseGame(){
  console.log("user lost the game");
  stopGame();
  alert("That was strike 3.  Game Over. You lost. :'(");
}

function winGame(){
  console.log("user won the game");
  stopGame();
  alert("Game Over. You won!! :D");
}





function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  
  
  if (btn == pattern[guessCounter]){
    //Correct guess
    if (guessCounter == progress){
      //Turn is over
      if (progress == pattern.length-1){
        //Win game!
        winGame();
      }
      else{
        //Correctly got pattern, move on
        progress++;
        clueHoldTime = clueHoldTime - 90;
        playClueSequence();
      }
    }
    else{
      //Check next guess
      guessCounter++;
    }
  }
  else{
    //Incorrect guess, add to the error count or lose game :(
    err++;
    if (err == 3){
      loseGame();
    }
    else{
      console.log("user made incorrect guess");
      alert("Wrong guess, that was strike " + err + ".  Try again! ^_^");
      playClueSequence()
    }
  } 
}



document.body.addEventListener("keydown", function(event) {
    if (event.keyCode < 55 && event.keyCode > 48){
      keyBt = event.keyCode - 48;
    }
    else if (event.keyCode < 103 && event.keyCode > 96){
      keyBt = event.keyCode - 96;
    }
    else
      keyBt = 0
    if (keyBt < 7 && keyBt > 0){
      document.getElementById("button"+keyBt).classList.add("lit")
      playNote(keyBt);
    }
});

document.body.addEventListener("keyup", function(event) {
    if (keyBt < 7 && keyBt > 0){
      document.getElementById("button"+keyBt).classList.remove("lit")
      guess(keyBt)
    }
});



// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 261.6,
  6: 261.6
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)