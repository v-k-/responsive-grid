let grid;
let cnv;
let gps;


//DOM: centering canvas on screen 
function centerCanvas() {
    let x = (windowWidth - width) / 2;
    let y = (windowHeight - height) / 2;
    cnv.position(x, y);
}

//util 
function pvline(pv1, pv2) {
    line(pv1.x, pv1.y, pv2.x, pv2.y);
}




function setup() {
    cnv = createCanvas(windowWidth, windowHeight);
    centerCanvas();

    //(coll_numb, row_numb, gutt_width, gutt_height, left_margin, margin_height )
    grid = new Grid(12, 3, 10, 20, 17, 30);


    background(220);
    grid.calc_points();
    gps = new Gpoint(grid);
    gp1 = gps.make_gpoint(100,100);
}

function draw() {

    background(220);
    grid.calc_points();
    grid.doodle();

    //draw bg grid going to clas soon
    strokeWeight(1);
    stroke(0, 50);
    for (let i = 0; i < width; i += 10) {
        line(i, 0, i, height);
    }

    for (let i = 0; i < height; i += 10) {
        line(0, i, width, i);
    }
    noLoop();
}



function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    centerCanvas();
    background(220);
    // background(220, 270, 80);
    redraw();
}