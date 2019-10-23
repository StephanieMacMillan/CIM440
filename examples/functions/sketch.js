
var hitzone

function setup() {
  // put setup code here

  createCanvas(400,400);
  hello();
  goodbye("stephanie");
}

function draw() {
  // put drawing code here
  background(255);
  //frameRate(1);
  if(circleHitzone,(100,100) == true){
    circleColor(random(width),random(height),random(255),random(255),random(255),random(0,200));

  }
  //order corresponds to parameter order in circle color function
  circleColor(random(width),random(height),random(255),random(255),random(255),random(0,200));

//var i = 0 is the star
//i >500 is how many times
//i++ is the counter
for(var i = 0; i <500; i++){
  circleColor(random(width),random(height),random(255),random(255),random(255),random(0,200));
}

fill("black");
ellipse(mouseX,mouseY,100,100);


if(circleHitzone(100,100) == true){
   rect(100,100,100,100);

}
}

circleHitzone(200,200);

if(hitzone3 == true){
  ellipse
}




function hello(){
  console.log("hello");
}

function goodbye(message){
  console.log("goodbye" + message);
}


function circleColor(xpos,ypos,r,g,b, cSize){
  fill(r,g,b);
  ellipse(xpos,ypos,cSize,cSize);
}

function circleHitzone(distX,distY){
  var curDist = dist(mouseX,mouseY,distX,distY);
  console.log("curDist" + curDist);
  fill(127);
ellipse(distX,distY,10,10);
if(curDist < 10){
  return true;
  stroke(255);
  strokeWeight(10);
}else{
  return false;
  stroke(255);
  strokeWeight(1);
}

//return curDist;
}
