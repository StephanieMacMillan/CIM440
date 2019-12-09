function setup() {
  // put setup code here
var cnv = createCanvas(400,400);
cnv.id("mycanvas");

var container0 = createDiv();
container0.id("container");

select("#container0").html("<h1>Your sketch title here! </h1>");
select("#containter0").style("width", "400px");//sets width
select("#container0").style("margin", "20px auto");


cnv.parent("#container0");

select("#container0").html('<frame')
//.html injects html or text into another html tag
}

function draw() {
  // put drawing code here
background(0);
}
