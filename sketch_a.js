let grid;


//DOM: centering canvas on screen 
function centerCanvas() {
    let x = (windowWidth - width) / 2;
    let y = (windowHeight - height) / 2;
    cnv.position(x, y);
}


let w;
let stop = false;

function setup() {
    cnv = createCanvas(windowWidth, windowHeight);
    centerCanvas();

    //(coll_numb, row_numb, gutt_width, gutt_height, left_margin, margin_height )
    grid = new Grid(12, 3, 10, 20, 0, 30);


    background(220);
    grid.calc_grid();


    const wp = grid.make_Gpoint(random(width / 2 - 100, width / 2 + 100), random(height / 2 - 100, height / 2 + 100));
     console.log("wpos");  
    w = new walker(wp);

}

function draw() {

    background(220);
    //grid.calc_grid();
    // grid.doodle();

    fill(200, 120, 110);

    // console.log(ponto);
    // rect (ponto.getV()  .x, ponto.getV().y, 300, 220);







    w.doit();
    if (stop) {
        noLoop();
    }


}

function mousePressed() {
    redraw();
    console.log(w.gp.gy);
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
    console.log(w.gp.gy);
}