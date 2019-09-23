function(preload){
 pinkImage = loadImage("pinkflower.png");
 purpleImage = loadimage("purpleflower.png");
 whiteImage =  loadimage("whiteflower.png");


}



function setup() {


createCanvas(500,500);  // put setup code here
;




}

function draw() {

image(pinkImage,0,0,pinkImage.width/4,pinkImage.height/4);
  // put drawing code here
}
