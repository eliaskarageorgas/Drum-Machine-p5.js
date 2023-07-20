
let kick, hh, clap; //sound variables
let hPat, cPat, kPat;//sound patterns
let hPatDemo, cPatDemo, kPatDemo;
let hPhrase, cPhrase, kPhrase;//sound phrases = sound in patterns
let drums;//attach with all phrases
let bpmCTRL;
let beatLength;
let cellWidth;
let cnv;
let sPat;
let cursorPos;
let elapsedTime;
let start;
let drumMachineHeight;
let tapButton;
let bpm;
let playButton;
let drumPattern;
let hihatSample;
let kickSample;
let clapSample;
const hihatSampleCollection = new Map();
const clapSampleCollection = new Map();
const kickSampleCollection = new Map();



function setup() {
  
  //button creation before canvas creation 
  //so we prevent the browser error (see documentation)
  drawDrumMachineButton = createButton('Draw drum machine');
  drawDrumMachineButton.center();
  drawDrumMachineButton.style('background: black' );
  drawDrumMachineButton.style('color: white');
  drawDrumMachineButton.size(180, 100);
  drawDrumMachineButton.mousePressed(() => {
    
    //function for loading drum samples hash-map in samples.js
    //not using p5's preload() because of error (see documentation)
    loadSampleCollections();
    drawDrumMachineButton.remove();
    cnv = createCanvas(800, 500);
    cnv.position(0, 0);
    cnv.mousePressed(canvasPressed);
    
    //timer for tap tempo
    start = millis();
    elapsedTime = 0;
    
    beatLength = 16;
    cellWidth = width/beatLength;
    drumMachineHeight = height/3;
    cursorPos = 0;
    
    //loading default 808 samples
    hh = hihatSampleCollection.get("hihat-808");
    clap = clapSampleCollection.get("clap-808");
    kick = kickSampleCollection.get("kick-808");
    
    //default patterns
    // 0 = no sound 
    // 1 = sound
    hPat = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    cPat = [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1];
    kPat = [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0];
    sPat = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    
    //loading phrases
    hPhrase = new p5.Phrase('hh', (time) => {hh.play(time)}, hPat);
    cPhrase = new p5.Phrase('clap', (time) => {clap.play(time)}, cPat);
    kPhrase = new p5.Phrase( 'kick', (time) =>  {kick.play(time)}, kPat);

    //adding all the phrases to play together the drums
    drums = new p5.Part();
    drums.addPhrase(hPhrase);
    drums.addPhrase(cPhrase);
    drums.addPhrase(kPhrase);
    //s pattern is for the playhead
    drums.addPhrase('seq' , sequence, sPat)
    bpm = 60;
    drums.setBPM(bpm);
    //slider for bpm control
    bpmCTRL = createSlider(30, 200, bpm, 1);
    bpmCTRL.position(190,170);
    drumPattern = 'None'; // none famous drum pattern has been chosen yet
    playButton = createButton('Play');
    playButton.position(190,255);
    playButton.style('background: black' );
    playButton.style('color: white');
    playButton.size(90, 65);
    playButton.mousePressed(() => {
      if (!drums.isPlaying){
        drums.loop();
        playButton.html('Stop')
        } else{
          drums.pause();
          playButton.html('Play')
        }
    });

    tapButton = createButton('Tap');
    tapButton.position(300,255);
    tapButton.size(90, 65);
    tapButton.style('background: black' );
    tapButton.style('color: white');
    tapButton.mousePressed(() => {TapTempo()});

    sampleDisplay();// function for displaying the samples menus from samples.js
    
    //Demo Drum Patterns
    hPatDemo = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    cPatDemo = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    kPatDemo = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  
    bpmCTRL.input(() => {bpm = bpmCTRL.value(); drums.setBPM(bpm); drawMachines();});
    famousDrumPatterns();// function for displaying the famous drum patterns buttons
    drawMachines();}); // function for drawing the two drum machine matrixes and text
}

// this function calculates the frequency of pushing the 'tap' button or 't' key 
// and converts it to tempo
function TapTempo(){
  elapsedTime = millis() - start;
  start = millis();
  bpm = (60/elapsedTime).toFixed(3) * 1000
  drums.setBPM(bpm);
  bpmCTRL.remove();
  bpmCTRL = createSlider(30, 200, bpm, 1);
  bpmCTRL.position(190,170);
  bpmCTRL.input(() => {bpm = bpmCTRL.value(); drums.setBPM(bpm); drawMachines();});
  drawMachines();
}

// loading new samples when menu is opened
function changeSamples(){
  hh = hihatSampleCollection.get(hihatSample.value());
  kick = kickSampleCollection.get(kickSample.value());
  clap = clapSampleCollection.get(clapSample.value());
}

function keyPressed(){
  if (key == " "){
    if (hh.isLoaded() && clap.isLoaded() && kick.isLoaded()){
      if (!drums.isPlaying){
      drums.loop();
      playButton.html('Stop')
      } else{
        drums.pause();
        playButton.html('Play')
      }
    }else{
      console.log('drums have not load')
      text('Drum samples have not load ', 350, 220);
      text('Press play again ', 460, 240);
    }
  }
  if(key == 't'){
    TapTempo();
  }
}

// function to check if a drum machine cell has been pressed
// if it has, its value changes
function canvasPressed(){
  let rowClicked = floor(3 * mouseY/drumMachineHeight);
  let indexClicked = floor(16 * mouseX / width);
  
  if (rowClicked === 0){
    hPat[indexClicked] = +!hPat[indexClicked];
  } else if(rowClicked === 1){
    cPat[indexClicked] = +!cPat[indexClicked];
  } else if(rowClicked === 2){
    kPat[indexClicked] = +!kPat[indexClicked];
  }
  drawMachines();
}

function drawMachines(){
  background('black');
  // Drum Machine
  stroke('gray');
  strokeWeight(2);
  fill('white');
  // drawing vertical lines
  for (let i = 0; i < beatLength + 1; i++){
    //startx, starty, endx, endy
    line(i*cellWidth, 0, i*cellWidth, drumMachineHeight);
  }
  // drawing horizontal lines
  for (let i = 0; i < 4; i++){
    //startx, starty, endx, endy
    line(0, i*drumMachineHeight/3, width, i*drumMachineHeight/3);
  }
  
  noStroke();
  for (let i = 0; i < beatLength; i++){
    if(hPat[i])
      ellipse(i*cellWidth + 0.5 * cellWidth, drumMachineHeight/6, 10);
    if(cPat[i])
      ellipse(i*cellWidth + 0.5 * cellWidth, drumMachineHeight/2, 10);
    if (kPat[i])  
      ellipse(i*cellWidth + 0.5 * cellWidth, drumMachineHeight*5/6, 10);
  }
  noStroke();
  stroke('white');
  fill('white');
  strokeWeight(1);
  textSize(20);
  text('BPM: ' + bpm, 190, 220);
  text ('Drum Pattern: ' + drumPattern, 190, 240);
  
  
  //Demo Machine
  stroke('white');
  strokeWeight(2);
  fill('white');
  //vertical lines
  for (let i = 0; i < beatLength + 1; i++){
    //startx, starty, endx, endy
    line(i*cellWidth, drumMachineHeight*2, i*cellWidth, drumMachineHeight*3);
  }
  //horizontal lines
  for (let i = 6; i < 10; i++){
    //startx, starty, endx, endy
    line(0, i*height/9, width, i*height/9);
  }
  
  noStroke();
  for (let i = 0; i < beatLength; i++){
    if(hPatDemo[i])
      ellipse(i*cellWidth + 0.5 * cellWidth, height * 6.5/9, 10);
    if(cPatDemo[i])
      ellipse(i*cellWidth + 0.5 * cellWidth, height * 7.5/9, 10);
    if (kPatDemo[i])  
      ellipse(i*cellWidth + 0.5 * cellWidth, height * 8.5/9, 10);
  }
  noStroke();
  stroke('white');
  fill('white');
  strokeWeight(1);
}

// function for controlling playhead's position and time
function sequence(time, beatIndex){
  setTimeout(() => {
    drawMachines();
  drawPlayhead(beatIndex);
  }, time * 1000);
}
 
// function for drawing playhead
function drawPlayhead(beatIndex){
  stroke('white');
  fill(255, 0 , 0, 30);
  rect((beatIndex-1) * cellWidth, 0, cellWidth, drumMachineHeight);
}