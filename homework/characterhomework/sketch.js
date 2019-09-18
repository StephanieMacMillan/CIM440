var posX = 0;
var posY = 0;

var eyePosY = 30;

var backgroundColor = "pink";

function setup() {



createCanvas(500,500);  // put setup code here




}

function draw() {
  // put drawing code here
  background(backgroundColor);
  strokeWeight(1);
  fill("white");

  posX = mouseX;
  posY = mouseY;

ellipse(posX,400,250,250);
  ellipse(mouseX,250,200,200); //body
  ellipse(mouseX - eyePosY,200,25,25);//left eye
  ellipse (mouseX + eyePosY,200,25,25) //right eye
  arc(mouseX,275,50,50,0,PI)// mouth
fill("orange");
triangle(mouseX,230, mouseX - 25,250, mouseX + 25,250);//nose
fill("black");
rect(mouseX - 100,150,200,25);
rect(mouseX - 50,75,100,100);


}

function mousePressed(){
  //background(0);
  backgroundColor = "blue";
  eyePosY = 15;
}

function mouseReleased(){
  //background(255);
//  backgroundColor = "pink";
eyePosY = 30;
}
