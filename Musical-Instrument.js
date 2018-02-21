/*
creating a visual instrument similar to a theramin, but has visual feedback.
*/

var playSound = false;
var osc;
var pg;
var lastMousePos = [];

function setup() { 
  createCanvas(400, 400);
	pg = createGraphics(400,400);
	osc = new p5.Oscillator();
  osc.amp(0);
} 

function draw() {
	background(color(255,255,255));
	var r = map(mouseX, 0, width, 0, 255);
	var b = map(mouseY, 0, width, 0, 255);
	osc.amp(map(mouseX, 0, width, 0, 1));
	osc.freq(map(mouseY, 0, width, 0, 1000), map(mouseX, 0, width, 0, 1));
  fill(color(r,120,b));
	noStroke();
	ellipse(width/2,height/2, width, height);
	print(playSound);
	if(mouseIsPressed == true) {
		fill(255);
		ellipse(mouseX, mouseY, 10);
		pg.stroke(255);
		pg.line(lastMousePos[0]/2,lastMousePos[1]/2, mouseX/2, mouseY/2);
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
}
