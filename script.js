// Identifying timer, score, and current question
let time = 100
let timeInterval;
let score = 0
let currentQuestion = 0
let highScores = [];

const startButton = document.getElementById("btn");
const questionContainer = document.getElementById('question-container');
const scoreContainer = document.getElementById('score-container');
const submitButton = document.getElementById("submit-btn")
const timerDisplay = document.getElementById("timerDisplay")

function timerFunction(){
    timerDisplay.textContent = `Time Remaining: ${time} seconds`;

    timeInterval = setInterval(() => {
        time --;

        timerDisplay.textContent = `Time Remaining: ${time} seconds`;

        if(time <= 0) {
            clearInterval(timeInterval);

            endQuiz();
        }
      
    }, 1000);
}


// When the start button is clicked, the startQuiz function is called
startButton.addEventListener("click", startQuiz);

// Removes start button from the display and runs the next question function
function startQuiz(){
    startButton.style.display = 'none';
   
    displayNextQuestion();

    timerDisplay.style.display = 'inline-block';

    timerFunction();
};

//Submit button appears when Quiz starts
function showSubmit(){

        submitButton.style.display = 'inline-block'
        startButton.addEventListener('click', showSubmit);

}

function showTime(){

    

}

// Function that displays the questions
function displayNextQuestion() {
    if (currentQuestion < questions.length) {
        const question = questions[currentQuestion];
        questionContainer.innerHTML = `
            <h2>${question.question}</h2>
            <ul>
                ${question.options.map(option => `<li><input type="radio" name="option" value="${option}">${option}</li>`).join('')}
            </ul>
        `;
    } else {
        endQuiz();
    }
}

// Function that ends the quiz
function endQuiz(){
    questionContainer.innerHTML = 'Quiz ended!';
    scoreContainer.style.display = 'inline-block'
    scoreContainer.innerHTML = `Your score: ${score}`;
    submitButton.style.display = 'none';
}

// Function to submit answer
function submitAnswer() {
    // Get the selected answer
    const selectedAnswer = document.querySelector('input[name="option"]:checked');
    
    if (selectedAnswer) {
        checkScore(selectedAnswer.value); // Call checkScore with the selected answer
    } else {
        // If no answer is selected, alert the user to select an answer
        alert("Please select an answer!");
    }
}

// Function that checks score
function checkScore(selectedAnswer){
    const question = questions[currentQuestion];
    if (selectedAnswer === question.correctAnswer) {
        score++;
    } else {
        time -= 10; // Decrease timer by 10 seconds for incorrect answer
    }
    currentQuestion++;
    displayNextQuestion();
}

// Load existing high scores from local storage (if any)
function loadHighScores() {
    const storedHighScores = localStorage.getItem('highScores');
    if (storedHighScores) {
        highScores = JSON.parse(storedHighScores);
    }
}

// Save high scores to local storage
function saveHighScores() {
    localStorage.setItem('highScores', JSON.stringify(highScores));
}

// Call this function when the quiz ends
function endQuiz() {
    // Hide the quiz content
    questionContainer.style.display = 'none';

    // Display the user's final score
    scoreContainer.innerHTML = `Your score: ${score}`;

    // Prompt the user for their initials
    const initials = prompt("Please enter your initials:");

    if (initials) {
        // Create a new score entry object
        const newScoreEntry = {
            initials: initials,
            score: score
        };

        // Add the new score entry to the high scores array
        highScores.push(newScoreEntry);

        // Save the high scores array to local storage
        saveHighScores();

        // Display a message to the user
        alert("Score saved! Thank you for playing.");
    } else {
        alert("Score not saved. No initials entered.");
    }
}

// Load high scores when the script starts
loadHighScores();

function clearTime(){
    if(endQuiz){
        clearInterval(timeInterval);
    }
};

clearTime();

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
