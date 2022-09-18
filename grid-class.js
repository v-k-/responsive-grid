let grid;

function setup() {
    createCanvas(windowWidth, windowHeight);
    grid = new Grid(12, 8, 35);
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
    constructor(coll_numb, gutt_width, margin_width) {
        this.coll_numb = coll_numb;
        this.gutt_width = gutt_width;
        this.margin_width = margin_width;
    }




    calc() {
         let H = 150;  

        // one gutter less than collumns
        let gutt_numb = this.coll_numb - 1;

        //calc out margins and gutters...
        let margins_out = width - this.margin_width * 2;
        let gutter_out = margins_out - this.gutt_width * gutt_numb;

        //calc the collumn width (remainder / num)
        let coll_width = gutter_out / this.coll_numb;

        // start at left margin
        let x = this.margin_width;

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
            let p3 = createVector(X , H);
            let p4 = createVector(X + coll_width, H);
            fill('red');
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
            gutt_numb: gutt_numb,
            margins_out: margins_out,
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
            rect(c.x, 0, c.coll_width, height)


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