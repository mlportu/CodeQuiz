//Opening page

var startButton = document.querySelector("#start-quiz");
var questionContainerEl = document.querySelector("#question-form");
var welcome = document.querySelector("#welcome");
var currentQuesitonIndex = 0;
var questionEl = document.querySelector("#question");
var aAnswerEl = document.querySelector("#button-a")
var bAnswerEl = document.querySelector("#button-b");
var cAnswerEl = document.querySelector("#button-c");

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

// array of questions
var questions = [
    {
      question: "Question1",
      answers: {
        a: "Answer 1",
        b: "Answer 2",
        c: "Answer 3"
      },
      correctAnswer: "c"
    },
    {
      question: "Question2",
      answers: {
        a: "Answer 4",
        b: "Answer 5",
        c: "Answer 6"
      },
      correctAnswer: "c"
    },
    {
      question: "Question3",
      answers: {
        a: "Answer 7",
        b: "Answer 8",
        c: "Answer 9"
      },
      correctAnswer: "c"
    }
];
var startQuiz = function (){
  startButton.classList.add("hide");
  welcome.classList.add("hide");
  questionContainerEl.classList.remove("hide");
  aAnswerEl.classList.remove("hide");

  renderQuestion();
 };

var renderQuestion = function (){
  var q = questions[currentQuesitonIndex];
      
  if (currentQuesitonIndex < questions.length) {
      questionEl.innerHTML = "<h2 id='question'>" + q.question + "</h2>";
      
      aAnswerEl.innerHTML = "<h3 id = 'button-a'>" + q.answers.a +"</h3>";
      aAnswerEl.setAttribute("value", "a")
      console.log(q.answers.a)

      bAnswerEl.innerHTML = "<h3 id=answer>" + q.answers.b +"</h3>";
      bAnswerEl.setAttribute("value", "b");
      bAnswerEl.addEventListener("click", selectAnswer);

      cAnswerEl.innerHTML = "<h3 id=answer>" + q.answers.c +"</h3>";
      cAnswerEl.setAttribute("value", "c");
      cAnswerEl.addEventListener("click", selectAnswer);
    }
  else{
    window.alert("Quiz Complete!");
  }
}

var selectAnswer = function (){
    var q = questions[currentQuesitonIndex];
    if(this.value === q.correctAnswer){
      console.log("Correct") 
    }
    else{
      console.log("Wrong");
      seconds -10;
    }

    nextQuestion();
    }

var nextQuestion = function() {
      window.confirm("Next Question?");
      currentQuesitonIndex ++;
      renderQuestion()
  }
//     currentQuestionIndex ++
//     nextQuestion();
// }

// var showQuestion = function() {
// if (currentQuestionIndex > questions.length){

// var selectAnswer = function(){

//Click response and generate next question

//once no more question OR no more time = "all done" show score or time and create field to enter initials button to submit

startButton.addEventListener("click", startQuiz);
aAnswerEl.addEventListener("click", selectAnswer);
