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
      question: "Who invented JavaScript?",
      answers: {
        a: "Douglas Crockford",
        b: "Sheryl Sandberg",
        c: "Brendan Eich"
      },
      correctAnswer: "c"
    },
    {
      question: "Which one of these is a JavaScript package manager?",
      answers: {
        a: "Node.js",
        b: "TypeScript",
        c: "npm"
      },
      correctAnswer: "c"
    },
    {
      question: "Which tool can you use to ensure code quality?",
      answers: {
        a: "Angular",
        b: "jQuery",
        c: "ESLint"
      },
      correctAnswer: "c"
    }
];
var startQuiz = function (){
  startButton.classList.add("hide");
  welcome.classList.add("hide");
  questionContainerEl.classList.remove("hide");

  nextQuestion();
}

var nextQuestion = function (){
      var q = questions[currentQuesitonIndex];
      console.log(q.answers.c);
      question.innerHTML = "<h2 id='question'>" + q.question + "</h2>";
      
      var aAnswerEl = document.createElement("button");
      aAnswerEl.className = "btn";
      aAnswerEl.style = "margin: 15px";
      aAnswerEl.innerHTML = "<h3>" + q.answers.a +"</h3>";
      questionContainerEl.appendChild(aAnswerEl);

      var bAnswerEl = document.createElement("button");
      bAnswerEl.className = "btn";
      bAnswerEl.style = "margin: 15px";
      bAnswerEl.innerHTML = "<h3>" + q.answers.b +"</h3>";
      questionContainerEl.appendChild(bAnswerEl);

      var cAnswerEl = document.createElement("button");
      cAnswerEl.className = "btn";
      cAnswerEl.style = "margin: 15px";
      cAnswerEl.innerHTML = "<h3>" + q.answers.c +"</h3>";
      questionContainerEl.appendChild(cAnswerEl);
    };

// var showQuestion = function() {
//   questionEl.innerText = questions.question;
//         console.log(questions.question);
// }
// var selectAnswer = function(){

// }


//each question has four buttons for answer and a new question
    //create variable for quizfield

//Click response and generate next question

//once no more question OR no more time = "all done" show score or time and create field to enter initials button to submit

startButton.addEventListener("click", startQuiz);