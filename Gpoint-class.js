	class Gpoints {

	    constructor(Grid) {
	        this.grid = Grid;
	        this.Gpoints = [];
	    }

	    make_gpoint(x, y, label){

	    	let gp = new Gpoint(x, y, label);
	    	this.Gpoints.push(gp);
	    }

	} //class


	class Gpoint extends Gpoints {
	    constructor(x, y, label) {
	    	super(grid);
	        this.x = x;
	        this.y = y;
	        this.gx;
	        this.gxy; 
	        this.label = label;
	        this.g_width;
	    }





	}//class