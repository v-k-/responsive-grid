let grid;

function setup() {
  createCanvas(windowWidth, windowHeight);
//(coll_numb, rows_numb, gutt_width, gutt_height, margin_width, margin_height )
  grid = new Grid(12,3, 8, 5, 35, 0);

  //background(220, 270, 80);
  grid.desenha();
}

// function draw() {};

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(220);
  // background(220, 270, 80);
  grid.desenha();
}

class Grid {
  constructor(
    coll_numb,
    rows_numb,
    gutt_width,
    gutt_height,
    margin_width,
    margin_height
  ) {
    this.coll_numb = coll_numb;
    this.rows_numb = coll_numb;
    this.gutt_width = gutt_width;
    this.gutt_height = gutt_height;
    this.margin_width = margin_width;
    this.margin_height = margin_height;
  }

  calc() {
    let H = 150;

    // one gutter less than collumns
    let gutt_numb_v = this.coll_numb - 1;
    let gutt_numb_h = this.rows_numb - 1;
    

    //calc out margins and gutters...
    let margins_out_v = width - this.margin_width * 2;
    let gutter_out_v = margins_out_v - this.gutt_width * gutt_numb_v;

    let margins_out_h = height - this.margin_height * 2;
    let gutter_out_h = margins_out_h - this.gutt_height * gutt_numb_h;



    //calc the collumn width (remainder / num)
    let coll_width = gutter_out_v / this.coll_numb;

     //calc the row width (remainder / num)
    let row_height = gutter_out_h / this.row_numb;

    // start at left margin and top
    let x = this.margin_width;
    let y = this.margin_height;

 // calc width of 2/3/4/6 collumns
    let h2 = row_height * 6 + this.gutt_height * 5;
    let h3 = row_height * 4 + this.gutt_height * 3;
    let h4 = row_height * 3 + this.gutt_height * 2;
    let h6 = row_height * 2 + this.gutt_height * 1;




    // calc width of 2/3/4/6 collumns
    let w2 = coll_width * 6 + this.gutt_width * 5;
    let w3 = coll_width * 4 + this.gutt_width * 3;
    let w4 = coll_width * 3 + this.gutt_width * 2;
    let w6 = coll_width * 2 + this.gutt_width * 1;

    //  // // // // // //
    // P1                 P2
    //
    //
    //
    // P3                 P4 width  = P4.x - P1.x
    // // // // // // // //  height = P4.y - P1.y

    let X = x;

    for (let i = 0; i < this.coll_numb; i++) {
      //12 collumns
      let p1 = createVector(X, 0);
      let p2 = createVector(X + coll_width, 0);
      let p3 = createVector(X, H);
      let p4 = createVector(X + coll_width, H);
      fill("red");
      ellipse(p1.x, p1.y, 15, 15);
      ellipse(p2.x, p2.y, 15, 15);
      ellipse(p3.x, p3.y, 15, 15);
      ellipse(p4.x, p4.y, 15, 15);
      // ellipse(X, H, 15, 15);
      // ellipse(X + coll_width, H, 15,15 );
      // ellipse(X + coll_width, 0, 15,15)

      X += coll_width + this.gutt_width;
    }

    return {
      gutt_numb_v: gutt_numb_v,
      margins_out_v: margins_out_v,
      coll_width: coll_width,
      x: x,
      w2: w2,
      w3: w3,
      w4: w4,
      w6: w6,
    };
  }

  desenha() {
    let c = this.calc();

    //draw the grid
    for (let i = 0; i < this.coll_numb; i++) {
      noStroke();
      fill(0, 30);

      //12 collumns
      rect(c.x, 0, c.coll_width, height);

      stroke(255, 225, 255);
      strokeWeight(3);
      fill(0, 60);

      //calc height incrementaly
      let h = c.w2 / 2;

      // 2 collumns
      if (i % 6 === 0) {
        rect(c.x, 0, c.w2, h);
      }

      // 3
      fill(0, 50);
      stroke(255);
      if (i % 4 === 0) {
        rect(c.x, h, c.w3, c.w3 / 2);
      }

      //4
      h += c.w3 / 2;
      strokeWeight(1);
      if (i % 3 === 0) {
        rect(c.x, h, c.w4, c.w4 / 2);
      }

      //6  - always incrementing y pos/var h
      h += c.w4 / 2;
      if (i % 2 === 0) {
        rect(c.x, h, c.w6, c.w6);
      }

      //draw and add to xpos
      c.x += c.coll_width + this.gutt_width;
    }
  }
}
