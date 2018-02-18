var smokes = [];

function setup() {
  createCanvas(400, 400);
	for(var i = 0; i < 100; i ++){
		smokes[i] = new smoke(i);	
		
	}
}
  
function draw() {
  background(0);
  noStroke();

  // draw smokestack
  fill(255);
  rect(195, height, 30, -100);
  // darker as it gets closer to 0
	for(var i = 0; i < smokes.length; i ++){
		smokes[i].update();	
	}
	
}

function smoke(delay) {
	this.x = 210;
	this.y = 300;
	this.r = 0;
	this.vel = 5;
	this.dec = 0.025;
	
	this.update = function() {
		if(millis() > delay * 100) {
			push();
			fill(this.y);
			//Can't get the rotating to work properly
			//rotate(this.r);
			rect(-10 + this.x,-10 + this.y,20,20);
			pop();
			
			this.y -= this.vel;
			this.vel -= this.dec;
			this.r -= 0.05;
			if(this.y < -150){
				this.vel = 5;
				this.y = 300;	 
			}
		}
	}
	
}
