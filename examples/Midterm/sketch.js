

var buttonP;
var buttonR;
var buttonPurp;
var buttonO;
var pinklips,redlips,orangelips,purplelips;
var currentImage = 0;
var imageArray = []
var imageArray2 = [];




function preload(){

  imageArray[0] = loadImage("pinklips.png");
  imageArray[1] = loadImage("redlips.png");
  imageArray[2] = loadImage("purplelips.png");
  imageArray[3] = loadImage("orangelips.png");
  imageArray2[0] = loadImage("pinklips2.png");
  imageArray2[1] = loadImage("redlips2.png");
  imageArray2[2] = loadImage("purplelips2.png");
  imageArray2[3] = loadImage("orangelips2.png");

}



function setup(){
createCanvas(500,500);
background("white");

buttonP = createButton("pink");
buttonP.position(100,450);
buttonP.mousePressed(function(){
  currentImage = 0
});

buttonR = createButton("red");
buttonR.position(200,450);
buttonR.mousePressed(function(){
  currentImage = 1;
});

buttonPurp = createButton("purple");
buttonPurp.position(300,450);
buttonPurp.mousePressed(function(){
  currentImage = 2;
});

buttonO = createButton("orange");
buttonO.position(400,450);
buttonO.mousePressed(function(){
  currentImage = 3;
});






}// end of setup

function draw() {

console.log("currentImage" + currentImage);


//mouseX,mouseY
if(mouseY > 300){
  image(imageArray[currentImage],75,100,imageArray[currentImage].width/5,imageArray[currentImage].height/5);

}else if(mouseY < 300){
  image(imageArray2[currentImage],75,100,imageArray[currentImage].width/5,imageArray[currentImage].height/5);

};




}// end of draw
