var peaceImage;
var droplet1Image;
var droplet2Image;
var droplet3Image;
var droplet4Image;
var droplet1ImageY = 100;
var droplet1ImageX = 420;
var droplet2ImageY = 60;
var droplet2ImageX = 400;
var droplet3ImageX = 265;
var droplet3ImageY = 20;
var droplet4ImageX = 480;
var droplet4ImageY = -50;
 var millisecond = millis();
 var textImage00;
 var textImage0;
 var textImage;
 var text2Image;
 var text3Image;
 var text4Image;
 var text5Image;




function preload(){
  peaceImage = loadImage("peacesign.jpg");
  droplet1Image = loadImage("droplet1.png");
  droplet2Image = loadImage("droplet2.png");
  droplet3Image = loadImage("droplet3.png");
  droplet4Image = loadImage("droplet4.png");
  text0Image = loadImage("Cimtext0.png");
  text00Image = loadImage("CIMtext00.png")
  textImage = loadImage("CIMtext2.png");
  text2Image = loadImage("CIMtext3.png");
  text3Image = loadImage("CIMtext4.png");
  text4Image = loadImage("cimtext5.png")
 text5Image = loadImage("CIMtext.png");

}


function setup() {
createCanvas(1000,1000);
 link = createA('https://www.instagram.com/stephaniexdesign/', '@stephaniexdesign','_blank');
 link.position(730,870);
link.style("font-size","30px");
link.hide();




}



function draw() {
  background(255);



image(peaceImage,420,0,peaceImage.width,peaceImage.height);
image(droplet1Image,droplet1ImageX,droplet1ImageY,droplet1Image.width,droplet1Image.height);

image(droplet2Image,droplet2ImageX,droplet2ImageY,droplet2Image.width,droplet2Image.height);
image(droplet3Image,droplet3ImageX,droplet3ImageY,droplet3Image.width,droplet3Image.height);
image(droplet4Image,droplet4ImageX,droplet4ImageY,droplet4Image.width,droplet4Image.height);
image(text00Image,450,825,text00Image.width/4,text00Image.height/4);




if(millis() > 2000){
  image(textImage,450,825,textImage.width/4,textImage.height/4);
};
if(millis() > 2500){
  image(text2Image,450,825,text2Image.width/4,text2Image.height/4);
};
if(millis() > 3500){
  image(text3Image,450,825,text3Image.width/4,text3Image.height/4);
};
if(millis() > 4000){
  image(text4Image,450,825,text3Image.width/4,text4Image.height/4);
};
if(millis() > 4500){
  image(text5Image,450,825,text5Image.width/4,text5Image.height/4);
};


if(millis() > 5000){
  link.show();
};



//textSize(60);
//textFont("Franklin Gothic Heavy");
//stroke(0);
//text('stephaniexdesign',475,850);
//fill("white")
//if(millis() > 2000){
  //fill("gray")
//}
//if(millis() > 5000){
  //fill(80,75,80);
//}



droplet1ImageY = droplet1ImageY + 1
droplet2ImageY = droplet2ImageY + 1
droplet3ImageY = droplet3ImageY + 1
droplet4ImageY = droplet4ImageY + 1

if(droplet1ImageY > 160){
  droplet1ImageY = 0;
}
if(droplet2ImageY > 195){
  droplet2ImageY = 0;
}
if(droplet3ImageY > 195){
  droplet3ImageY = -20;
}
if(droplet4ImageY > 160){
  droplet4ImageY = -70;
}






}
