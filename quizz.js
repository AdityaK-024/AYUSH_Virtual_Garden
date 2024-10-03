const tulsiQuestions = [
    {
        question: "What is Tulsi known for?",
        answers: ["Medicinal properties", "Decorative purposes", "Cooking", "All of the above"],
        correct: 0,
    },
    {
        question: "Which part of Tulsi is most commonly used?",
        answers: ["Leaves", "Flowers", "Roots", "Stems"],
        correct: 0,
    },
    // Add more questions as needed
];

let currentQuestionIndex = 0;

function openPopup() {
    document.getElementById('popup1').style.display = 'block';
    loadQuestion();
}

function loadQuestion() {
    const questionElement = document.getElementById('question1');
    const answerButtons = document.querySelectorAll('#answer-buttons1 .btn');
    const nextButton = document.getElementById('next-btn1');

    // Set the question and answers for Tulsi quiz
    const currentQuestion = tulsiQuestions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    answerButtons.forEach((button, index) => {
        button.innerText = currentQuestion.answers[index];
        button.onclick = () => selectAnswer(index); // Attach click event to each button
    });

    // Hide the next button initially
    nextButton.style.display = 'none';
}

function selectAnswer(selectedIndex) {
    const currentQuestion = tulsiQuestions[currentQuestionIndex];
    const isCorrect = selectedIndex === currentQuestion.correct;

    // Provide feedback
    if (isCorrect) {
        alert("Correct!");
    } else {
        alert("Wrong answer!");
    }

    // Disable all answer buttons
    const answerButtons = document.querySelectorAll('#answer-buttons1 .btn');
    answerButtons.forEach(button => button.disabled = true);

    // Show next button
    const nextButton = document.getElementById('next-btn1');
    nextButton.style.display = 'block';
    
    // Attach the next question loading action to the button
    nextButton.onclick = () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < tulsiQuestions.length) {
            loadQuestion(); // Load the next question
        } else {
            alert("Quiz Finished!");
            closePopup(); // Close popup when finished
            currentQuestionIndex = 0; // Reset for next time
        }
    };
}

function closePopup() {
    document.getElementById('popup1').style.display = 'none';
    currentQuestionIndex = 0; // Reset question index when closing
}
