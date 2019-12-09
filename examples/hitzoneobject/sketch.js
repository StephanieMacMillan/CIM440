var button1;
var button2;

function setup() {
createCanvas(400,400);
button1 = new hitzoneObject(100,200,50,"red");
button2 = new hitzoneObject(200,200,50,"green");
}// end of setup

function draw() {
background(255);

button1.display();
button1.check();
console.log("button1 overlay" + button1.overlay)
button2.display();
button2.check();

}// end of draw

//class defines code as an object .... cntstructor is building blocks for indv objects
class hitzoneObject{
constructor(tempX,tempY,tempSize,tempColor){
  this.x = tempX
  this.y = tempY
  this.boxSize = tempSize
  this.boxColor = tempColor
  this.overlay = false;
}

display(){
  fill(this.boxColor);
  rect(this.x,this.y,this.boxSize,this.boxSize);
}

check(){
  if(mouseX > this.x && mousex < (this.x + this.boxSize) && mouseY > this.y && mouse.y >
  (this.y + this.boxSize)){
    console.log("over button" + this.boxColor);
    this.overlay = true;
  }else{
    console.log("off button" + this.boxColor);
    this.overlay = false;

  }
}


}
