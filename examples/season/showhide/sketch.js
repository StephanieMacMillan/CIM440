

var puppyImage;
var show;
var hide;

var showAndHide = false;
// loads in media before setup and draw
function preload(){
puppyImage=loadImage("puppies.jpg");

}


function setup() {
  createCanvas(400,400)
show=createButton("Show");
hide=createButton("Hide");
show.mousePressed(function(){
  showAndHide = true;
});
hide.mousePressed(function(){
  showAndHide = false;
});


}

function draw() {
  // put drawing code here
  background(255)
  if(showAndHide == true){
  image(puppyImage,0,0,puppyImage.width/4,puppyImage.height/4);}

  text("click show and hide to see puppy");
}
