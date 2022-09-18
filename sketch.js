function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  grid(12, 15, 35);
}

function draw() {}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(220);
  grid(12, 15, 35);
}

function grid(coll_numb, gutt_width, margin_width) {
  // one gutter less than collumns
  let gutt_numb = coll_numb - 1;
  
  //calc out margins and gutters...
  let margins_out = width - margin_width * 2;
  let gutter_out = margins_out - gutt_width * gutt_numb;
  
  //calc the collumn width (remainder / num)
  let coll_width = gutter_out / coll_numb;
  
  // start at left margin
  let x = margin_width;
  
  // calc width of 2/3/4/6 collumns
  let w2 = coll_width * 6 + gutt_width * 5;
    let w3 = coll_width * 4 + gutt_width * 3;
    let w4 = coll_width * 3 + gutt_width * 2;
    let w6 = coll_width * 2 + gutt_width * 1;

  //draw the grid
  for (let i = 0; i < coll_numb; i++) {

    noStroke();
    fill(0, 30);
    
    //12 collumns 
    rect(x, 0, coll_width, height);


    stroke(255);
    strokeWeight(2);
    
    //calc height incrementaly
    let h = w2/2;
    
    // 2 collumns
    if (i % 6 === 0) {
      rect(x, 0, w2, h);
    }
    
    // 3
    if (i % 4 === 0) {
      rect(x, h, w3, w3/2);
    }
    
    //4
    h+=w3/2;
    strokeWeight(1);
    if (i % 3 === 0) {
      rect(x, h, w4, w4/2);
    }
    
    //6 always incrementing y pos
    h+=w4/2;
    if (i % 2 === 0) {
      rect(x, h, w6, w6);
    }
    
    //draw and add to xpos
    x += coll_width + gutt_width;
  }
  
  //reset starting point
  x = margin_width;
}
