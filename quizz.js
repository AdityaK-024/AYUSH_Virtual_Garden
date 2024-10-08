// quizzes.js

// Define quiz questions for each plant
const quizzes = {
    "Tulsi": {
        questions: [
            {
                question: "What is Tulsi commonly known as?",
                options: ["Holy Basil", "Sweet Basil", "Thai Basil", "Wild Basil"],
                answer: "Holy Basil"
            },
            {
                question: "Which of the following is a benefit of Tulsi?",
                options: ["Improves vision", "Reduces stress", "Boosts appetite", "Cures diabetes"],
                answer: "Reduces stress"
            }
        ]
    },
    "Neem": {
        questions: [
            {
                question: "What part of the Neem tree is commonly used in medicines?",
                options: ["Leaves", "Bark", "Roots", "Flowers"],
                answer: "Leaves"
            },
            {
                question: "Neem is known for its properties against which condition?",
                options: ["Diabetes", "Cancer", "Skin infections", "Hair loss"],
                answer: "Skin infections"
            }
        ]
    },
    "Ashwagandha": {
        questions: [
            {
                question: "What is Ashwagandha commonly used for?",
                options: ["Weight loss", "Stress relief", "Muscle gain", "Skin care"],
                answer: "Stress relief"
            },
            {
                question: "Which system of medicine utilizes Ashwagandha?",
                options: ["Allopathy", "Ayurveda", "Homeopathy", "Naturopathy"],
                answer: "Ayurveda"
            }
        ]
    },
    "Aloe Vera": {
        questions: [
            {
                question: "What is a common use of Aloe Vera?",
                options: ["Burn treatment", "Heart medication", "Pain relief", "Weight loss"],
                answer: "Burn treatment"
            },
            {
                question: "Aloe Vera is effective for which of the following?",
                options: ["Digestive health", "Memory enhancement", "Blood pressure", "Hair growth"],
                answer: "Digestive health"
            }
        ]
    },
    "Brahmi": {
        questions: [
            {
                question: "What is Brahmi primarily used for?",
                options: ["Improving memory", "Curing headaches", "Enhancing vision", "Promoting sleep"],
                answer: "Improving memory"
            },
            {
                question: "Brahmi is known to help with which condition?",
                options: ["Anxiety", "Diabetes", "Asthma", "Digestive issues"],
                answer: "Anxiety"
            }
        ]
    },
    "Turmeric": {
        questions: [
            {
                question: "What active compound in Turmeric is known for its health benefits?",
                options: ["Curcumin", "Caffeine", "Capsaicin", "Resveratrol"],
                answer: "Curcumin"
            },
            {
                question: "Turmeric is commonly used for which of the following?",
                options: ["Inflammation", "Fatigue", "Headaches", "Nausea"],
                answer: "Inflammation"
            }
        ]
    }
};

// Function to start the quiz
function startQuiz(plant) {
    const selectedQuiz = quizzes[plant];
    if (selectedQuiz) {
        let score = 0;
        let currentQuestion = 0;

        // Function to display the current question
        function displayQuestion() {
            const questionElement = document.getElementById('quiz-question');
            const optionsElement = document.getElementById('quiz-options');
            optionsElement.innerHTML = '';

            if (currentQuestion < selectedQuiz.questions.length) {
                questionElement.innerText = selectedQuiz.questions[currentQuestion].question;

                selectedQuiz.questions[currentQuestion].options.forEach(option => {
                    const optionElement = document.createElement('button');
                    optionElement.innerText = option;
                    optionElement.onclick = function() {
                        if (option === selectedQuiz.questions[currentQuestion].answer) {
                            score++;
                        }
                        currentQuestion++;
                        displayQuestion();
                    };
                    optionsElement.appendChild(optionElement);
                });
            } else {
                questionElement.innerText = `Quiz finished! Your score is ${score} out of ${selectedQuiz.questions.length}.`;
                optionsElement.innerHTML = '';
            }
        }

        displayQuestion();
    }
}

// Function to call when the quiz is initiated
function proceedToQuiz() {
    const title = document.getElementById("quiz-popup-title").innerText;
    startQuiz(title.replace(' Quiz', ''));
}
