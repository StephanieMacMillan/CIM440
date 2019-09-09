function setup() {


createCanvas(500,500);  // put setup code here
background("pink");




}

function draw() {
  // put drawing code here
  strokeWeight(1);
  fill("white");
ellipse(250,400,250,250);
  ellipse(250,250,200,200); //body
  ellipse(200,200,25,25);//left eye
  ellipse (300,200,25,25) //right eye
  arc(250,275,50,50,0,PI)// mouth
fill("orange");
triangle(225,240,250,230,250,250);//nose
fill("black");
rect(150,150,200,25);
rect(200,75,100,100);

;







}
