

var puppyImage;
// loads in media before setup and draw
function preload(){
puppyImage=loadImage("puppies.jpg");

}


function setup() {
  createCanvas(400,400)




}

function draw() {
  // put drawing code here
  //image var, x,y
  image(puppyImage,0,0) //places based on upper left hand corner
  //i(mgae var, x,y,width scale,height scale)
image(puppyImage,0,0, puppyImage.width/4,puppyImage.height/4);
//dont choose a random size it will distort the image. dividing width and dheight by chosen number will scale porportionally
}
