	class Gpoint  {
	    constructor(x, y, ratio_x, ratio_y, label) {
	        this.original_x = x;
	        this.original_y = y;
	        this.gx = x;
	        this.gy = y; 
	        this.label = label;
	        this.ratio_x = ratio_x;
	        this.ratio_y = ratio_y;
	        console.log("constructed sire")
	    }

	    set_Gpoint(x, y){
	    	this.original_x = x;
	    	this.original_y = y;
	    	console.log("seted")
	    }

	    getV(){
	    	return createVector(this.gx, this.gy);
	    }
	}//class