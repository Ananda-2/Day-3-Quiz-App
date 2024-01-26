// const questions = [
//   {
//     question: "llo snjnc jdnnaxz dncd ",
//     answers: [
//       { text: "11", correct: false },
//       { text: "22", correct: false },
//       { text: "33", correct: false },
//       { text: "44", correct: true },
//     ],
//   },
//   {
//     question: "llo snjnc jdnnaxz dncd ",
//     answers: [
//       { text: "11", correct: false },
//       { text: "22", correct: false },
//       { text: "33", correct: false },
//       { text: "44", correct: true },
//     ],
//   },
//   {
//     question: "llo snjnc jdnnaxz dncd ",
//     answers: [
//       { text: "11", correct: false },
//       { text: "22", correct: false },
//       { text: "33", correct: false },
//       { text: "44", correct: true },
//     ],
//   },
//   {
//     question: "llo snjnc jdnnaxz dncd ",
//     answers: [
//       { text: "11", correct: false },
//       { text: "22", correct: false },
//       { text: "33", correct: false },
//       { text: "44", correct: true },
//     ],
//   },
// ];

// const questionClass = document.getElementById("question");
// const answerClass = document.getElementById("answer");
// const nextClass = document.getElementById("next");

// let questionNumber = 0;
// let score = 0;

// function startQuiz() {
//   showQuestion();
// }

// function showQuestion() {

//     // delete all previous answer
//     const AnswerdBtn = document.querySelectorAll(".btn") ;
//     AnswerdBtn.forEach((eachItem) =>{
//       eachItem.remove() ;
//     })

//   nextClass.style.display = "none";

//   let qnNumber = questionNumber+1 ;

//   questionClass.innerHTML =
//     qnNumber + ". " + questions[questionNumber].question;

//   questions[questionNumber].answers.forEach((element) => {
//     let button = document.createElement("button");
//     button.innerHTML = element.text;
//     button.classList.add("btn");
//     // button.setAttribute("id","btn");
//     button.dataset.correct = element.correct;
//     answerClass.appendChild(button);
//   });
// }

// //const clickButton = document.querySelectorAll(".btn") ;
// // answerClass.disabled = true ;

// answerClass.addEventListener("click", (e) => {
//   nextClass.style.display = "block";
//   console.log(e);
//   if (e.target.dataset.correct === "true") {
//     e.target.classList.add("correctAns") ;
//     score++ ;
// }else{
//       e.target.classList.add("incorrectAns") ;
//   }

// const AnswerdBtn = document.querySelectorAll(".btn") ;
// AnswerdBtn.forEach((eachItem) => {
//   eachItem.disabled = true ;

//   if(eachItem.dataset.correct === "true"){
//     // score++ ;
//     eachItem.classList.add("correctAns") ;
//   }

// })

// nextClass.addEventListener("click", ()=>{
//   questionNumber++ ;

//   if(questionNumber<4){

//     showQuestion() ;

//   }else{
//     answerClass.style.display = "none" ;
//     nextClass.style.display = "none" ;

//     let finalScore = "Your Final Score Is " + score ;
//     questionClass.innerHTML = finalScore ;

//   }
// })

// });

// startQuiz();

const questions = [
  {
    question: "How many months have 30 days in a year ?",
    answers: [
      { text: "7", correct: false },
      { text: "5", correct: false },
      { text: "6", correct: false },
      { text: "4", correct: true },
    ],
  },
  {
    question: "Who played the main character in the movie RUSTOM ?",
    answers: [
      { text: "Akshay Kumar", correct: true },
      { text: "Saharukh Khan", correct: false },
      { text: "Salman Khan", correct: false },
      { text: "Amir", correct: false },
    ],
  },
  {
    question: "Which of the following facts about Rectangle is false ?",
    answers: [
      { text: "All 4 sides are not equal", correct: false },
      { text: "All 4 sides are equal", correct: true },
      { text: "It has 4 corners", correct: false },
      { text: "It has 4 edges", correct: false },
    ],
  },
  {
    question: "Which country won most gold medals in Rio Olympics 2016 ?",
    answers: [
      { text: "Chaina", correct: false },
      { text: "India", correct: false },
      { text: "UK", correct: false },
      { text: "USA", correct: true },
    ],
  },
  {
    question: "Which country won most gold medals in Rio Olympics 2016 ?",
    answers: [
      { text: "Chaina", correct: false },
      { text: "India", correct: false },
      { text: "UK", correct: false },
      { text: "USA", correct: true },
    ],
  },
  {
    question: "Which country won most gold medals in Rio Olympics 2016 ?",
    answers: [
      { text: "Chaina", correct: false },
      { text: "India", correct: false },
      { text: "UK", correct: false },
      { text: "USA", correct: true },
    ],
  },
  {
    question: "Which country won most gold medals in Rio Olympics 2016 ?",
    answers: [
      { text: "Chaina", correct: false },
      { text: "India", correct: false },
      { text: "UK", correct: false },
      { text: "USA", correct: true },
    ],
  },
  {
    question: "Which country won most gold medals in Rio Olympics 2016 ?",
    answers: [
      { text: "Chaina", correct: false },
      { text: "India", correct: false },
      { text: "UK", correct: false },
      { text: "USA", correct: true },
    ],
  },
];

const questionClass = document.getElementById("question");
const answerClass = document.getElementById("answer");
const nextClass = document.getElementById("next");
let qnNumber = 0 ;

let questionNumber = 0;
let score = 0;

function startQuiz() {
  showQuestion();
}

function showQuestion() {
  // delete all previous answer
  const AnswerdBtn = document.querySelectorAll(".btn");
  AnswerdBtn.forEach((eachItem) => {
    eachItem.remove();
  });

  // set next button display none
  nextClass.style.display = "none";

  qnNumber = questionNumber + 1;
  questionClass.innerHTML =
    qnNumber + ". " + questions[questionNumber].question;

    // add options 

  questions[questionNumber].answers.forEach((element) => {
    let button = document.createElement("button");
    button.innerHTML = element.text;
    button.classList.add("btn");
    // button.setAttribute("id","btn");
    button.dataset.correct = element.correct;
    answerClass.appendChild(button);
    button.addEventListener("click", selectAnswer);
  });
}

// show answer on click 

function selectAnswer(e) {
  nextClass.style.display = "block";

  // console.log(e);
  if (e.target.dataset.correct === "true") {
    e.target.classList.add("correctAns");
    score++;
  } else {
    e.target.classList.add("incorrectAns");
  }
  
  const AnswerdBtn = document.querySelectorAll(".btn");
  AnswerdBtn.forEach((eachItem) => {
    eachItem.disabled = true;
    eachItem.classList.add("disabled") ;

    if (eachItem.dataset.correct === "true") {
      // score++ ;
      eachItem.classList.add("correctAns");
    }
  });

// change qn on click next button 

nextClass.addEventListener("click", () => {
  questionNumber++ ;
  nextClass.style.display = "none";

  console.log(questionNumber);

  if (questionNumber < questions.length) {
    showQuestion();
  } else {
    answerClass.style.display = "none";
    nextClass.style.display = "none";

    let finalScore = "Your Final Score Is " + score;
    questionClass.innerHTML = finalScore;
  }
});
}

startQuiz();
