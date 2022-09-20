class walker {
    constructor(gpoint) {
        this.gp = gpoint;
        // console.log(this.gp);
        this.acc = p5.Vector.random2D();
        // this.acc = createVector(0, 0);
        this.vel = createVector(0, 0);
    }


    doit() {
        this.chekEdges();
        this.vel.add(this.acc);
        this.gp.gp_add(this.vel);
        ellipse(this.gp.gx, this.gp.gy, 20, 20);
        this.acc.mult(0);

    }


    chekEdges() {
        if (this.gp.gx > width || this.gp.gx < 0) {
            this.vel.x = this.vel.x * -1
        }

        if (this.gp.gy > height || this.gp.gy < 0) {
            this.vel.y = this.vel.y * -1
        }

    }
}