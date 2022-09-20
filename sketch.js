let grid;


//DOM: centering canvas on screen 
function centerCanvas() {
    let x = (windowWidth - width) / 2;
    let y = (windowHeight - height) / 2;
    cnv.position(x, y);
}

let ponto, pos, tpos, rd;
let walkers = []
let w;
let stop = false;

function setup() {
    cnv = createCanvas(windowWidth, windowHeight);
    centerCanvas();

    //(coll_numb, row_numb, gutt_width, gutt_height, left_margin, margin_height )
    grid = new Grid(12, 3, 10, 20, 0, 30);


    background(220);
    grid.calc_grid();
    //grid.make_Gpoint(100,100);
    ponto = grid.make_Gpoint(200, 200);
    pos = grid.make_Gpoint(width / 2, height / 2);
    tpos = grid.make_Gpoint(25, 600);
    rd = grid.make_Gpoint(323, 323);


    for (let i = 0; i < 1; i++) {
        const wp = grid.make_Gpoint(random(width / 2 - 100, width / 2 + 100), random(height / 2 - 100, height / 2 + 100));
        // console.log(wpos);  
        w = new walker(wp);
        walkers.push(w);
    }

}

function draw() {

    background(220);
    //grid.calc_grid();
    // grid.doodle();

    fill(200, 120, 110);

    // console.log(ponto);
    // rect (ponto.getV()  .x, ponto.getV().y, 300, 220);






    ellipse(pos.gx, pos.gy, 100, 100);

    const ex = cos(radians(millis() / 10)) * 130;
    const ey = sin(radians(millis()) / 10) * 130;

    ellipse(pos.gx + ex, pos.gy + ey, 10, 10);

    text('I\'m adapting to  window size', tpos.gx, tpos.gy);
    text('I\'m not', 25, 570);


    rect(10, 10, rd.gx, rd.gy);
    for (const w of walkers) {
        w.doit();
        if (stop) {
            noLoop();
        }
    }

}

function mousePressed() {
    redraw();
    console.log(walkers[0].gp.gy);
}

function keyPressed() {
    stop = !stop;
}

function windowResized() {
    console.log('wresize');
    resizeCanvas(windowWidth, windowHeight);
    centerCanvas();
    background(220);
    grid.calc_grid();
    redraw();
    console.log(walkers[0].gp.gy);
}