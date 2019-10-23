var seasonsSelect;
var seasonType = "";

var sunX = 0;
var sunY = 0;

var snowX = [];
var snowY = [];
var snowAmount = 100;

var leafX = [];
var leafY = [];
var leafAmount = 100;
var leafimage = 0;

fucntion preload(){
leafimage = loadImage("https://openclipart.org/image/300px/svg_to_png/257622/1470680735.png")
};

function setup() {
  // put setup code here
  createCanvas(400,400);
  seasonsSelect = createSelect();
  seasonsSelect.position(10,10);
  seasonsSelect.option("");
  seasonsSelect.option("fall");
  seasonsSelect.option("winter");
  seasonsSelect.option("spring");
  seasonsSelect.option("summer");
  seasonsSelect.changed(function(){

  seasonType = seasonsSelect.value();
});

sunY = height * 2;
sunX = width/2;
//var i = 0 is the start variable
//i<100 is going to set our limit
//i++ is our itterator
//i ++ is the same as I = i + 1
for(var i = 0; i<snowAmount; i++){
  snowX[i] = random(0,width); //chooses a number from 0 to width - 1 or in this case 399
  snowY[i] = random(0, -500);
};
console.log("snowX" + snowX);
console.log("snowY" + snowY);

for(var i = 0; i < leafAmount; i++){
  leafX[i] = random(0,width);
  leafY[i] = random(0,-500);
}

}

function draw() {

  background(255);
  if(seasonType == "fall"){
    console.log("fall");

for(var l = 0; l<leafAmount; l++){
image(leafImage,leafX[1],leafY[1],20,20);

  if(leafY[l]<height-20){
    leafY[l]++;
    leafX[l] = leafX[1] + sin(radians(framecount)));
  }
}

  }else if(seasonType == "winter"){
    console.log("winter");

    for(var x = 0; x<snowAmount;x++){
      snowY[x]++; // same as saying snowY[x]= snowY[x]+1;
      ellipse(snowX[x],snowY[x],10,10);
      if(snowY[x] > height){
        //snowY[x] = 0;   - this will look less natural but will still work
        snowY[x] = random(0,-500);
        snowX[x] = random(0,width);
        //checks for snow hitting bottom of the screen
      }

    }

  }else if(seasonType == "spring"){
    console.log("spring");
  }else if(seasonType == "summer"){
    console.log("summer");
    fill("orange");
    stroke("red");
    ellipse(sunX, sunY, width, height);
    //sunY = sunY -1;
    if(sunY == height){
      sunY = sunY -1;

    }
  }else{
    console.log("blank");
    text("make a selection", 100,20);
  }
  // put drawing code here
}
