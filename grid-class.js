class Grid {
    constructor(
        coll_numb,
        row_numb,
        gutt_width,
        gutt_height,
        margin_width,
        margin_height
    ) {
        this.coll_numb = coll_numb;
        this.row_numb = row_numb;
        this.gutt_width = gutt_width;
        this.gutt_height = gutt_height;
        this.left_margin = margin_width;
        this.margin_height = margin_height;
        this.center;
        this.points = [];
        this.w_slices = [];
        this.h_slices = [];

    }



    //  // // // // // //
    // P0                 P1
    //
    //       center
    //
    // P2                 P3
    // // // // // // // // 
    calc_points() {



        let right_margin = width - this.left_margin;
        let bottom_margin = height - this.margin_height;


        const p0 = createVector(this.left_margin, this.margin_height);
        const p1 = createVector(right_margin, this.margin_height);
        const p2 = createVector(this.left_margin, bottom_margin);
        const p3 = createVector(right_margin, bottom_margin);
        const center = createVector(p2.x / 2 + p3.x / 2, p1.y / 2 + p3.y / 2);
        this.points = [p0, p1, p2, p3];
        this.center = center;

        this.make_w_slices(24);
        this.make_h_slices(24);





    }

    make_w_slices(n) {
        const coll_width = (this.points[1].x - this.points[0].x) / n;


        let acc = this.points[0].x;

        for (let i = 0; i < n; i++) {
            this.w_slices[i] = createVector(acc, this.points[0].y);
            acc += coll_width;
        }

    }

    make_h_slices(n) {
        const row_width = (this.points[2].y - this.points[0].y) / n;


        let acc = this.points[0].y;

        for (let i = 0; i < n; i++) {
            this.h_slices[i] = createVector(this.points[0].x, acc);
            acc += row_width;
        }

    }


    make_row() {}

    doodle() {
        strokeWeight(1);
        stroke(0);
        noFill();

        //lines of margins and diagonals
        const p0 = this.points[0];
        const p1 = this.points[1];
        const p2 = this.points[2];
        const p3 = this.points[3];

        pvline(p0, p1);
        pvline(p0, p2);
        pvline(p0, p3);

        pvline(p1, p2);
        pvline(p1, p3);
        pvline(p2, p3);


        // draw center point
        ellipse(this.center.x, this.center.y, 7, 7);


        // draw base points at corners
        for (const p of this.points) {
            ellipse(p.x, p.y, 7, 7);
        }

        // draw points along top axis
        for (const t of this.w_slices) {
            ellipse(t.x, t.y, 3, 3);
        }

        // draw points along top axis
        for (const t of this.h_slices) {
            ellipse(t.x, t.y, 3, 3);
        }



    }


}