var colors = ["white","black", "red", "green", "blue", "yellow", "orange", "violet"];
var currentColor;
var y=0
function setup() {
  createCanvas(innerWidth, innerHeight);
  background("white");
  header();
}

function draw() {
  for(var i=0; i<colors.length; i++){
currColor = new ColorBox(0,y,50,50,colors[i]);
currColor.appear();
y+=50;
  }
}

function header() {
  fill("#404040");
  rect(0, 0, width, 50);

  textAlign(CENTER);
  fill("white");
  textSize(18);
  text("PAINT", width / 2, 33);
}

