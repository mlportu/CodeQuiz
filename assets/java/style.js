//Opening page
var startButton = document.getElementById("start-quiz");
var questionContainerEl = document.getElementById("question-form");
var welcome = document.getElementById("welcome");
var currentQuestionIndex
var questionEl = document.getElementById("question");
var answerButtonEl = document.getElementById("answer-buttons");


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
    question: "Who invented JavaScript?",
    answers: {
      a: "Douglas Crockford",
      b: "Sheryl Sandberg",
      c: "Brendan Eich"
    },
    correctAnswer: "c"
  },]
//   {
//     question: "Which one of these is a JavaScript package manager?",
//     answers: {
//       a: "Node.js",
//       b: "TypeScript",
//       c: "npm"
//     },
//     correctAnswer: "c"
//   },
//   {
//     question: "Which tool can you use to ensure code quality?",
//     answers: {
//       a: "Angular",
//       b: "jQuery",
//       c: "RequireJS",
//       d: "ESLint"
//     },
//     correctAnswer: "d"
//   }
//     ];

var startQuiz = function (){
  console.log("started");
  startButton.classList.add("hide");
  welcome.classList.add("hide");
  questionContainerEl.classList.remove("hide");
  currentQuestionIndex = 0

  nextQuestion();
}

var nextQuestion = function(){
    showQuestion(currentQuestionIndex)
}

var showQuestion = function(question) {
  questionEl.innertext = question.question
}
// var selectAnswer = function(){

// }
//Click Start and generate next question


//each question has four buttons for answer and a new question
    //create variable for quizfield

//Click response and generate next question

//once no more question OR no more time = "all done" show score or time and create field to enter initials button to submit

startButton.addEventListener("click", startQuiz);