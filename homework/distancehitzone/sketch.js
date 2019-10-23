var hitX = 100;
var hitY = 100;
var threshold = 20;
var hitDistance = 0;
var changeBackground = 0;
function setup() {

  createCanvas(400,400);  // put setup code here



}

function draw() {
  // put drawing code here
  background(changeBackground);
  ellipse(hitX,hitY,threshold*2,threshold*2);
 hitDistance = dist(mouseX,mouseY,hitX,hitY);
console.log("hitDistance" + hitDistance);
//hover state
if(hitDistance <= threshold){
  //do something, if hit distance is less than or equal to 20
  fill(127);
  text("click me",hitX,hitY+30);
}else{
  fill(255);  //if top is false than execute code in else statement
}
// else = default condition


 function mousePressed(){
   if(hitDistance <= threshold){
     //do something, if hit distance is less than or equal to 20
  changeBackground = "blue";
   }else{

     changeBackground = "white";
}

}
