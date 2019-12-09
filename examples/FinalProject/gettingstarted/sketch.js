function setup() {
  // put setup code here
  //Sets the canvas size
createCanvas(500,500);
//sets the color of the background
background("green");
background(0); //black
background(255);//white
background(200);// grayish-white .. grayscale = 0-255
background(255,0,0); // full red
background(0,255,0);//full green
background(0,0,255);//full blue
background(127,255,0);// chartruse

fill(0,255,0);// adjusts inner shpae color
stroke("blue");//adjusts stroke(outer edge color)
ellipse(50,50,10,10); //ellipse (x,y,width,height)

fill(255,0,0)
ellipse(100,100,50,50);
}

function draw() {
  // put drawing code here
}
