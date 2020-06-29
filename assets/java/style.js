//Opening page

var startButton = document.querySelector("#start-quiz");
var questionContainerEl = document.querySelector("#question-form");
var welcome = document.querySelector("#welcome");
var currentQuesitonIndex = 0;


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
        a: "Answer 1",
        b: "Answer 2",
        c: "Answer 3"
      },
      correctAnswer: "c"
    },
    {
      question: "Question3",
      answers: {
        a: "Answer 1",
        b: "Answer 2",
        c: "Answer 3"
      },
      correctAnswer: "c"
    }
];
var startQuiz = function (){
  startButton.classList.add("hide");
  welcome.classList.add("hide");
  questionContainerEl.classList.remove("hide");

  renderQuestion();
 };

var renderQuestion = function (){
      var q = questions[currentQuesitonIndex];
      question.innerHTML = "<h2 id='question'>" + q.question + "</h2>";
      
      var aAnswerEl = document.createElement("button");
      aAnswerEl.className = "btn";
      aAnswerEl.style = "margin: 15px";
      aAnswerEl.innerHTML = "<h3 id=answer>" + q.answers.a +"</h3>";
      aAnswerEl.setAttribute("value", "a")
      questionContainerEl.appendChild(aAnswerEl);
      aAnswerEl.addEventListener("click", selectAnswer);

      var bAnswerEl = document.createElement("button");
      bAnswerEl.className = "btn";
      bAnswerEl.setAttribute("value", "b")
      bAnswerEl.style = "margin: 15px";
      bAnswerEl.innerHTML = "<h3 id=answer>" + q.answers.b +"</h3>";
      questionContainerEl.appendChild(bAnswerEl);
      bAnswerEl.addEventListener("click", selectAnswer);

      var cAnswerEl = document.createElement("button");
      cAnswerEl.className = "btn";
      cAnswerEl.setAttribute("value", "c")
      cAnswerEl.style = "margin: 15px";
      cAnswerEl.innerHTML = "<h3 id=answer>" + q.answers.c +"</h3>";
      questionContainerEl.appendChild(cAnswerEl);
      cAnswerEl.addEventListener("click", selectAnswer);
    }

var selectAnswer = function (){
    var q = questions[currentQuesitonIndex];
    if(this.value === q.correctAnswer){
      alert("correct")
    }
    else{
      alert("wrong");
      seconds -10;
    }
    
};


//     currentQuestionIndex ++
//     nextQuestion();
// }

// var showQuestion = function() {
// if (currentQuestionIndex > questions.length){

// var selectAnswer = function(){

//Click response and generate next question

//once no more question OR no more time = "all done" show score or time and create field to enter initials button to submit

startButton.addEventListener("click", startQuiz);
