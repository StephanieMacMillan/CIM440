var hitX = 200;
var hitY = 200;
var hitW = 100;
var hitH = 50;



function setup() {

createCanvas(400,400);  // put setup code here





}

function draw() {
  // put drawing code here
  background("white")
  rect(hitX,hitY,hitW,hitH)
  if(mouseX > hitX && mouseX < hitX + hitW && mouseY > hitY && mouseY <
  hitY + hitH){
    // if all conditions are true, do something
    console.log("In here!");
    fill(255,0,0);
    ellipse(100,100,10,10);
  }else{
     console.log("Outside");
     fill(0,255,0)
  }
}
