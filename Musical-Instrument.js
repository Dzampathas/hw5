/*
creating a visual instrument similar to a theramin, but has visual feedback.
*/

var playSound = false;
var osc;
var pg;
var lastMousePos = [];
var beingPressed = false;

function setup() { 
  createCanvas(400, 400);
	pg = createGraphics(400,400);
	osc = new p5.Oscillator();
  osc.amp(0);
} 

function draw() {
	background(color(0,0,0));
	var r = map(mouseX, 0, width, 0, 255);
	var b = map(mouseY, 0, width, 0, 255);
	osc.amp(map(mouseX, 0, width, 0, 1));
	osc.freq(map(mouseY, 0, width, 0, 1000), map(mouseX, 0, width, 0, 1));
  fill(color(r,120,b));
	if(mouseIsPressed == true){
		stroke(255);
	} else {
		noStroke();
	}
	ellipse(width/2,height/2, width, height);
	print(playSound);
	if(mouseIsPressed == true) {
		if(beingPressed == false){
			lastMousePos[0] = mouseX;
			lastMousePos[1] = mouseY;
		}
		fill(255);
		ellipse(mouseX, mouseY, 20);
		pg.stroke(255,2,b);
		pg.line(lastMousePos[0]/2,lastMousePos[1]/2, mouseX/2, mouseY/2);
		beingPressed = true;
	}
	lastMousePos[0] = mouseX;
	lastMousePos[1] = mouseY;
	image(pg,0,0);
	
}

function mousePressed(){
	playSound = true;	
	osc.start();
}
function mouseReleased(){
	playSound = false;	
	osc.stop();
	pg.clear();
	beingPressed = false;
}
