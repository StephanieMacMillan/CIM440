function setup() {

  var pointX = 0;
  var pointY = 0;
//  var point2; // variable undefined
  var faceColor = "blue";
var colorButton;

    createCanvas(500,500);

    pointX = width/2;

    pointY = height/2;
    console.log("pointX " + pointX + " pointY " + pointY);

  colorButton = createButton("Click to turn purple");//function that is part of the p5.dom library, creates html object
  colorButton.position(20,20);
colorButton.mousepressed(function(){
  faceColor = "purple";
});

//var message = "hello"// the scope of this variable is only available inside of
//the setup function
  }

function draw() {
// put drawing code here
  //console.log(message);//message is not defined bc message variable is only in
  //the setup's scope
  console.log(drawMessage);
  background(255);
  //pointX = 100;
  //pointY = 100;
  //use if statement to chagnge background colorButton
  //what is going to be our condition

if(mouseX < width/2){
  console.log("left hand side")
  background(255);

}

if(mouseX< width/2){
  console.log("right hand side")
  background("gray");

}

  pointX = mouseX;
  pointY = mouseY;
  fill(faceColor);
  rect(pointX - 100 ,pointY - 100,200,200);
  fill(255);
  ellipse(pointX, pointY, 10,10);
  ellipse(pointX + 20, pointY - 20, 30,30);
  ellipse(pointX - 20, pointY - 20, 30,30);
  // arc(x,y,width,height,start,end)
  arc(pointX,pointY + 10,50,50,0,PI);
  //ellipse(point2, point2, 10,10);
}//end of draw



  //faceColor = "red";


function mouseReleased(){

  //faceColor = "blue";

}

function keyPressed(){

//  faceColor = "white";
console.log("key + key");
console.log("keyCode" + keyCode);
//character conditional - if condition = true, than do what is written inside curly braces
// == means one side equals the other
if(key=="w"){
  //what you want to happen goes inside curly braces
  faceColor("white");
}
if(key=="r"){
  faceColor = "red";
}



}//end of document
