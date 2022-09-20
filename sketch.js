let grid;


//DOM: centering canvas on screen 
function centerCanvas() {
    let x = (windowWidth - width) / 2;
    let y = (windowHeight - height) / 2;
    cnv.position(x, y);
}

let ponto;

function setup() {
    cnv = createCanvas(windowWidth, windowHeight);
    centerCanvas();

    //(coll_numb, row_numb, gutt_width, gutt_height, left_margin, margin_height )
    grid = new Grid(12, 3, 10, 20, 0, 30);


    background(220);
    grid.calc_grid();
    //grid.make_Gpoint(100,100);
    ponto =  grid.make_Gpoint(200,200);


}

function draw() {

    background(220);
    //grid.calc_grid();
    // grid.doodle();

    fill(200, 120, 110);

    // console.log(ponto);
    // rect (ponto.getV()  .x, ponto.getV().y, 300, 220);




    const pos = grid.make_Gpoint(width/2, height/2);

    ellipse(pos.x, pos.y, 100, 100 );

    const x = cos(radians(millis()))*130
    const y = sin(radians(millis()))*130;
    const r = grid.make_Gpoint(x, y);
    ellipse(pos.x + r.x,   pos.y + r.y, 10,10);



}



function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    centerCanvas();
    background(220);
    // background(220, 270, 80);
    redraw();
}