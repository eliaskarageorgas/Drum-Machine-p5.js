function famousDrumPatterns(){
  
    fourOnTheFloor = createButton('Four on the floor');
    fourOnTheFloor.position(15,170);
    fourOnTheFloor.size(150, 30);
    //fourOnTheFloor.style('background: #730507')
    fourOnTheFloor.style('background: black' );
    fourOnTheFloor.style('color: white');
    fourOnTheFloor.mousePressed(() => {
      hPatDemo = [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0];
      cPatDemo = [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0];
      kPatDemo = [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0];
      drumPattern = 'Four on the floor';
      //console.log(hPatDemo);
      bpm = 120;
      drums.setBPM(bpm);
      bpmCTRL.remove();
      bpmCTRL = createSlider(30, 200, bpm, 1);
      bpmCTRL.position(190,170);
      bpmCTRL.input(() => {bpm = bpmCTRL.value(); drums.setBPM(bpm); drawMachines();});
      drawMachines();
    });
    
    trapBeat = createButton('Trap beat');
    trapBeat.position(15,210);
    trapBeat.size(150, 30);
    trapBeat.style('background: black' );
    trapBeat.style('color: white');
    trapBeat.mousePressed(() => {
      hPatDemo = [1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1];
      cPatDemo = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0];
      kPatDemo = [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0];
      drumPattern = 'Trap beat';
      bpm = 140;
      drums.setBPM(bpm);
      bpmCTRL.remove();
      bpmCTRL = createSlider(30, 200, bpm, 1);
      bpmCTRL.position(190,170);
      bpmCTRL.input(() => {bpm = bpmCTRL.value(); drums.setBPM(bpm); drawMachines();});
      drawMachines();
    });
    
    boDiddley = createButton('BoDiddley');
    boDiddley.position(15,250);
    boDiddley.size(150, 30);
    boDiddley.style('background: black' );
    boDiddley.style('color: white');
    boDiddley.mousePressed(() => {
      hPatDemo = [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0];
      cPatDemo = [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0];
      kPatDemo = [1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0];
      drumPattern = 'BoDiddley';
      bpm = 108;
      drums.setBPM(bpm);
      bpmCTRL.remove();
      bpmCTRL = createSlider(30, 200, bpm, 1);
      bpmCTRL.position(190,170);
      bpmCTRL.input(() => {bpm = bpmCTRL.value(); drums.setBPM(bpm); drawMachines();});
      drawMachines();
    });
    
    boomBap = createButton('Boom-Bap');
    boomBap.position(15,290);
    boomBap.size(150, 30);
    boomBap.style('background: black' );
    boomBap.style('color: white');
    boomBap.mousePressed(() => {
      hPatDemo = [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0];
      cPatDemo = [0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1];
      kPatDemo = [1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0];
      drumPattern = 'Boom-Bap';
      bpm = 90;
      drums.setBPM(bpm);
      bpmCTRL.remove();
      bpmCTRL = createSlider(30, 200, bpm, 1);
      bpmCTRL.position(190,170);
      bpmCTRL.input(() => {bpm = bpmCTRL.value(); drums.setBPM(bpm); drawMachines();});
      drawMachines();
    });
  
    dembow = createButton('Dembow');
    dembow.position(640,170);
    dembow.size(150, 30);
    dembow.style('background: black' );
    dembow.style('color: white');
    dembow.mousePressed(() => {
      hPatDemo = [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0];
      cPatDemo = [0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0];
      kPatDemo = [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0];
      drumPattern = 'Dembow';
      bpm = 94;
      drums.setBPM(bpm);
      bpmCTRL.remove();
      bpmCTRL = createSlider(30, 200, bpm, 1);
      bpmCTRL.position(190,170);
      bpmCTRL.input(() => {bpm = bpmCTRL.value(); drums.setBPM(bpm); drawMachines();});
      drawMachines();
    });
    
    impeach = createButton('Impeach The President');
    impeach.size(150, 30);
    impeach.position(640,210);
    impeach.style('background: black' );
    impeach.style('color: white');
    impeach.mousePressed(() => {
      hPatDemo = [1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0];
      cPatDemo = [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0];
      kPatDemo = [1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0];
      drumPattern = 'Impeach The President';
      bpm = 96;
      drums.setBPM(bpm);
      bpmCTRL.remove();
      bpmCTRL = createSlider(30, 200, bpm, 1);
      bpmCTRL.position(190,170);
      bpmCTRL.input(() => {bpm = bpmCTRL.value(); drums.setBPM(bpm); drawMachines();});
      drawMachines();
    });
    
    eighths = createButton('Iconic 8ths');
    eighths.position(640,250);
    eighths.size(150, 30);
    eighths.style('background: black' );
    eighths.style('color: white');
    eighths.mousePressed(() => {
      hPatDemo = [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0];
      cPatDemo = [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0];
      kPatDemo = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0];
      drumPattern = 'Iconic 8ths';
      bpm = 106;
      drums.setBPM(bpm);
      bpmCTRL.remove();
      bpmCTRL = createSlider(30, 200, bpm, 1);
      bpmCTRL.position(190,170);
      bpmCTRL.input(() => {bpm = bpmCTRL.value(); drums.setBPM(bpm); drawMachines();});
      drawMachines();
    });
    
    shuffle = createButton('Shuffle');
    shuffle.position(640,290);
    shuffle.size(150, 30);
    shuffle.style('background: black' );
    shuffle.style('color: white');
    shuffle.mousePressed(() => {
      hPatDemo = [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0];
      cPatDemo = [0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0];
      kPatDemo = [1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0];
      drumPattern = 'Shuffle';
      bpm = 122;
      drums.setBPM(bpm);
      bpmCTRL.remove();
      bpmCTRL = createSlider(30, 200, bpm, 1);
      bpmCTRL.position(190,170);
      bpmCTRL.input(() => {bpm = bpmCTRL.value(); drums.setBPM(bpm); drawMachines();});
      drawMachines();
    });
  }