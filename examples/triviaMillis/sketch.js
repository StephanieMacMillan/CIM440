var questions = ["is iceland always covered in ice?","what ocean lies east of the U.S?"];
var options = ["1) true 2) false","1) pacific 2) eastern 3) indian 4) atlantic"];
var answers = [1,3];

var buttons = [];

var currentOption = -1;

var currentQuestion = 0;

var answerText = "";

var startTimer = false;

var interval = 5000;
var prevMillis = 0;

function setup() {
  // put setup code here
  createCanvas(400,400);
  buttons[0] = createButton("1");
  buttons[0].position(10,300);
  buttons[0].mousePressed(function(){
    currentOption = 0;
  });

  buttons[1] = createButton("2");
  buttons[1].position(50,300);
  buttons[1].mousePressed(function(){
    currentOption = 1;
  });

  buttons[2] = createButton("3");
  buttons[2].position(100,300);
  buttons[2].mousePressed(function(){
    currentOption = 2;
  });

  buttons[3] = createButton("4");
  buttons[3].position(150,300);
  buttons[3].mousePressed(function(){
    currentOption = 3;
  });
}// end of setup



function draw() {
  // put drawing code here
background(255);
text(questions[currentQuestion], 20,100);
  text(options[currentQuestion], 20,150);


  if(startTimer == true){
    text(answerText, 20 ,200);
    if(millis() - prevMillis > interval){
      prevMillis = millis();
      startTimer = false;
    }
  }// end of ttsrat time = true

//if currentOption is not equl to -1
  if(currentOption != -1){
    //do something if currentOptionis not equal to -1
    if(currentOption == answers[currentQuestion]){
      console.log("correct");
      answerText = "Correct";
      currentQuestion = currentQuestion + 1;


//questions.length counts how many items are in the array, in this case it has 2 items
//if current question equals 2 in this example  , goes back to the beginning
  if(currentQuestion == questions.length){
currentQuestion = 0;

  }

    }else{
      console.log("incorrect");
    answerText = "Incorrect";
  }// end of checking if answer is correct or Incorrect

  //reset to inactive state so incorrect doesnt remain displayes
  // checks for new response by resetting to inactive
  currentOption = -1
 startTimer = true
 prevMillis = millis(); // ensures that when button is pressed, from that point on
 //its going to start counting 5 seconds

}//end of current option != 1
}//end of draw

//!= menas not equal to
