
var ballArray = [];

function setup() { 
  createCanvas(400, 400);
	for(let i = 0; i < 200; i ++){
		ballArray[i] = new ball(width/2,height/2, 0);
		ballArray[i].xSpeed = random(-4,4);
		ballArray[i].ySpeed = random(-4,4);
	}
} 

function draw() { 
  background(0);
	for(let i = 0; i < ballArray.length; i ++){
		ballArray[i].update();
	}
	for(let i = 0; i < ballArray.length-1; i ++){
			stroke(map(i,0,49,255,50));
			line(ballArray[i].x, ballArray[i].y, ballArray[i+1].x , ballArray[i+1].y);
	}
			stroke(map(49,0,49,255,50));
			line(ballArray[0].x, ballArray[0].y, ballArray[ballArray.length-1].x , ballArray[ballArray.length-1].y);
}

function ball(startingX, startingY, startingDiv) {
	this.startingSize = 20;
	this.div = startingDiv;
	this.x = startingX;
	this.y = startingY;
	this.xSpeed = 3;
	this.ySpeed = 1;
	this.width = 20;
	this.height = 20;
	this.alive = true;
	this.startingWidth = 20;
	this.startingHeight = 20;
	
	this.update = function(){
		fill(255);
		if(this.div > 5){
			this.alive = false;
		}
		if(this.alive == true){
			this.width = this.startingSize - 5*this.div;
			this.height = this.startingSize - 5*this.div;
			this.startingHeight = this.startingSize - 5*this.div;
			this.startingWidth = this.startingSize - 5*this.div;
			//code
			if(this.x < this.width/2 || this.x > width - this.width/2){
				 this.xSpeed *= -1;
				this.div += 1;
				this.width = this.startingWidth/2;
			} else{
				while(this.width < this.startingWidth){
					this.width += 0.001;
				}
			}
			if(this.y < this.width/2 || this.y > height - this.width/2){
				this.ySpeed *= -1
				this.div += 1;
				this.height = this.startingHeight/2;
			} else {
				while(this.height < this.startingHeight){
					this.height += 0.001;
				}
			}
			//if statement
			//ellipse(this.x, this.y, this.width, this.height);
			this.x += this.xSpeed;
			this.y += this.ySpeed;
		} else {
			//destroy
			//this.alive = true;
		}
	}
	
}
