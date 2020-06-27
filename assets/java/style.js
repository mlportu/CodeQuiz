//Opening page

//timer
//var countDown = setInterval(function(){

//timer
var seconds=60;
var timer;
function timerFunction() {
  if(seconds < 60) { // I want it to say 1:00, not 60
    document.getElementById("timer").innerHTML = seconds;
  }
  if (seconds >0 ) { // so it doesn't go to -1
     seconds--;
  } else {
     clearInterval(timer);
     alert("Quiz Over");
  }
}
document.getElementById("start-quiz").onclick = function() {
  if(!timer) {
    timer = window.setInterval(function() { 
      timerFunction();
    }, 1000); // every second
  }
} 

document.getElementById("timer").innerHTML="1:00"; 

//Click Start and generate next question
    //each question has four buttons for answer and a new question

//Click response and generate next question

//once no more question OR no more time = "all done" show score or time and create field to enter initials button to submit