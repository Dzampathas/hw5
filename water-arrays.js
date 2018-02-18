var drops = [];

function setup() {
  createCanvas(400, 400);
  colorMode(HSB)
	
	for(let i = 0; i < 5; i ++){
		drops[i] = new drop(random(1,4));	
	}
}
  
function draw() {
  background(0);
  noStroke();

  // draw pipe
  rect(0, 200, 230, 20);
  
  // draw drip
  for(let i = 0; i < drops.length; i ++){
		drops[i].update();
	}
}

function drop(DropLength) {
	this.x = 230;
	this.y = 220;
	this.vel = 0.01
	this.acc = 5;
	
	this.update = function(){
		if( this.y > height*DropLength) {
			this.y = 220;
			this.acc = 5;
		}
		this.acc += this.vel;
		this.y += this.acc;
		
		ellipse(this.x, this.y, 10);
	}
}
