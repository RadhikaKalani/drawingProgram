var myRed = 10;
var myBlue = 25;
var myGreen = 255;

function circle(x, y, diameter) {
  ellipse(x, y, diameter, diameter);
}

function setup() {
  createCanvas(640, 480);
}

function draw() {
  noStroke();
  fill(myRed, myGreen, myBlue);
  circle(mouseX, mouseY, 100);
  
  myRed = myRed + 0.5;
  myBlue = myBlue - 1;
  myGreen = myGreen - 0.5;

  //colorful pen
  if (myRed >= 255) {
    myRed = 0;
  } if (myBlue <= 0) {
    myBlue = 255;
  } if (myGreen <= 0) {
    myGreen = 255;
  }
  
  //eraser
  if (mouseIsPressed == true) {
    noStroke();
    fill(255);
    circle(mouseX, mouseY, 102);
  }
  
}