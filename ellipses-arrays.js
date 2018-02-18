var circles = [];

function setup() {
  createCanvas(400, 400);
  colorMode(HSB)
	circles[1] = new circle(100, 200, 100, color(120,60,100), 0.01);
	circles[2] = new circle(300, 200, 30, color(240, 60, 100), 0.02);
  
}
function draw() {
  background(255);
  noStroke();

  circles[1].update();
	circles[2].update();
}

function circle(x,y,d, fillcolor, chance){
	this.x = x;
	this.y = y;
	this.d = d;
	
	this.update = function(){
		fill(fillcolor);
		ellipse(this.x, this.y, this.d);
		
		if(random() < chance) {
			this.d = random(10,400);	
		}
	}
}
