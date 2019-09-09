function setup() {
  // put setup code here
  //Sets the canvas size
createCanvas(500,500);
//sets the color of the background
background(0,255,0)



}

function draw() {
  // put drawing code here
  strokeWeight(1);
  //left eye
  ellipse(100,100,20,20);
  //right eye
  ellipse(140,100,20,20);
  //mouth
  rect(80,200,100,30);// rect draws from left corner out

  strokeWeight(5);
  point(30,27);

  //mouth line
  strokeWeight(1);
  line(80,215,180,215);//x1,y1.x2.y2

  //width/2 = center point of width height/2=center point of height
  //console.log("width " + width);
//  console.log("height " + height);

triangle(width/2, height/2,(width/2)+10,(height/2)+20,(width/2)-10,(height/2)+20)
;//x1,y1,x2,y2,x3,y3

arc(50,50,50,50,0,PI);

var mouthX=80;
var mouthY=200;
}
