// Identifying timer score and current question
let timer = 100
let score = 0
let currentQuestion = 0

const startButton = document.getElementById("btn");
const questionContainer = document.getElementById('question-container');
const scoreContainer = document.getElementById('score-container');

// When the start button is clicked, the startQuiz function is called
startButton.addEventListener("click", startQuiz);

// Removes start button from the display and runs the next question function
function startQuiz(){
    startButton.style.display = 'none';
    displayNextQuestion();
};

// Function that displays the questions
function displayNextQuestion(){
    if(currentQuestion < questions.length) {
        const question = questions[currentQuestion];
        questionContainer.innerHTML = `
            <h2>${question.question}</h2>
            <ul>
                ${question.options.map(option => `<li><button onclick="checkAnswer('${option}')">${option}</button></li>`).join('')}
            </ul>
        `;
    } else {
        endQuiz
    }
};

// Function that ends the quiz
function endQuiz(){
    questionContainer.innerHTML = 'Quiz ended!';
    scoreContainer.innerHTML = `Your score: ${score}`;
}

// Function that checks score
function checkScore(selectedAnswer){
    const question = questions[currentQuestionIndex];
    if (selectedAnswer === question.correctAnswer) {
        score++;
    } else {
        timer -= 10; // Decrease timer by 10 seconds for incorrect answer
    }
    currentQuestionIndex++;
    displayNextQuestion();
}


// All Questions
const questions = [
    {
        question: "Which CSS property is used to change the text color of an element?",
        options: ["'background-color'", "'color'", "'text-color'", "'font-color'" ],
        correctAnswer: "'color'"
    },
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "High Text Markup Language", "Hello Tony Marcus Lounge", "Home Tool Markup Language"],
        correctAnswer: "Hyper Text Markup Language"
    },
    {
        question: "Which tag is used to define an unordered list in HTML?",
        options: ["'<ol>'", "'<ul>'", "'<il>'", "'<list>'"],
        correctAnswer: "'<ul>'"
    },
    {
        question: "Which programming language is used for building dynamic web applications?",
        options: ["Java", "Python", "C#", "JavaScript"],
        correctAnswer: "JavaScript"
    },
    {
        question: "True or False: JavaScript is a case-sensitive language.",
        options: ["True", "False"],
        correctAnswer: "True"
    },
    {
        question: "Which of the following is not a JavaScript data type?",
        options: ["Float", "String", "Boolean", "Object"],
        correctAnswer: "Float"
    },
    {
        question: "Which symbol is used for single-line comments in JavaScript?",
        options: ["'///'", "'/|\'", "'!?//'", "'//'"],
        correctAnswer: "'//'"
    },
    {
        question: "Which of the following is NOT a valid way to declare a variable in JavaScript?",
        options: ["'var x = 5'", "'let y = 6'", "'const z = 4'", "'variable v = 9'"],
        correctAnswer: "'variable v = 9'"
    },
    {
        question: "True or False: HTML is a programming language.",
        options: ["True", "False"],
        correctAnswer: "False"
    },
    {
        question: "What does CSS stand for?",
        options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
        correctAnswer: "Cascading Style Sheets"
    }

]
