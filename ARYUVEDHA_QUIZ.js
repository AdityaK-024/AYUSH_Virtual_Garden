// Questions for each category
const questions = {
    ayurveda: [
        { question: "What is Ayurveda's primary focus?", options: ["Yoga", "Balance of Doshas", "Herbs", "Exercise"], answer: 1 },
        { question: "Which plant is commonly used for digestive health in Ayurveda?", options: ["Tulsi", "Ashwagandha", "Ginger", "Aloe Vera"], answer: 2 },
        { question: "What does Ayurveda emphasize as the foundation of health?", options: ["Balance of the mind", "Balance of the doshas", "Proper diet", "Spiritual healing"], answer: 1 },
        { question: "Which of the following is NOT a dosha in Ayurveda?", options: ["Vata", "Pitta", "Kapha", "Prana"], answer: 3 },
        { question: "Which herb is commonly used in Ayurveda for stress relief?", options: ["Ginseng", "Tulsi", "Ashwagandha", "Aloe Vera"], answer: 2 },
        { question: "Ayurvedic treatments often include which of the following?", options: ["Massage", "Chiropractic adjustments", "Acupuncture", "Physical therapy"], answer: 0 },
        { question: "What is the main purpose of Ayurveda's Panchakarma treatment?", options: ["To balance the doshas", "To remove toxins from the body", "To enhance physical strength", "To improve vision"], answer: 1 },
        { question: "Which food is considered to be the best for balancing Pitta dosha?", options: ["Spicy foods", "Cold dairy products", "Citrus fruits", "Fried foods"], answer: 1 },
        { question: "Which Ayurvedic practice is associated with the use of oils?", options: ["Shirodhara", "Basti", "Nasya", "Abhyanga"], answer: 3 },
        { question: "Which dosha is primarily related to air and space elements?", options: ["Vata", "Pitta", "Kapha", "Rasa"], answer: 0 }
    ],
    yoga: [
        { question: "What is the main goal of Yoga?", options: ["Physical fitness", "Mental clarity", "Spiritual growth", "All of the above"], answer: 3 },
        { question: "Which of the following is a type of yoga?", options: ["Hatha", "Vinyasa", "Kundalini", "All of the above"], answer: 3 },
        { question: "Who is considered the father of modern Yoga?", options: ["Swami Sivananda", "Patanjali", "B.K.S. Iyengar", "Swami Vivekananda"], answer: 2 },
        { question: "Which yoga poses focus on strength?", options: ["Hatha", "Vinyasa", "Ashtanga", "Restorative"], answer: 2 },
        { question: "What is 'Pranayama' in Yoga?", options: ["Breathing exercises", "Meditation", "Physical postures", "Chanting mantras"], answer: 0 },
        { question: "What is the meaning of the word 'Yoga'?", options: ["Union", "Peace", "Health", "Balance"], answer: 0 },
        { question: "What is 'Savasana' used for in Yoga?", options: ["Detoxification", "Relaxation", "Flexibility", "Strength"], answer: 1 },
        { question: "Which type of Yoga involves a series of poses synchronized with breath?", options: ["Vinyasa", "Bikram", "Kundalini", "Ashtanga"], answer: 0 },
        { question: "Which of the following is a core principle of Yoga?", options: ["Asana", "Chakras", "Kundalini", "None of the above"], answer: 0 },
        { question: "What is 'Dhyana' in Yoga?", options: ["Chanting", "Breathing", "Meditation", "Postures"], answer: 2 }
    ],
    unani: [
        { question: "Which element is vital in Unani medicine?", options: ["Fire", "Air", "Humors", "Water"], answer: 2 },
        { question: "What does Unani medicine primarily focus on?", options: ["Balance of the four humors", "Herbs", "Surgical methods", "Spiritual healing"], answer: 0 },
        { question: "Who is the founder of Unani medicine?", options: ["Avicenna", "Ibn Khaldun", "Al-Razi", "Al-Biruni"], answer: 0 },
        { question: "In Unani medicine, which humor is associated with the element of water?", options: ["Blood", "Phlegm", "Yellow bile", "Black bile"], answer: 1 },
        { question: "Which of the following is a major treatment method in Unani medicine?", options: ["Diet regulation", "Surgical procedures", "Herbal medicines", "All of the above"], answer: 3 },
        { question: "What is 'Tibb' in Unani medicine?", options: ["Diet", "Medicine", "Surgery", "Anatomy"], answer: 1 },
        { question: "What are the four humors in Unani medicine?", options: ["Blood, Phlegm, Yellow bile, Black bile", "Air, Fire, Water, Earth", "Pitta, Vata, Kapha, Sattva", "None of the above"], answer: 0 },
        { question: "Which of the following herbs is commonly used in Unani for detoxification?", options: ["Ginger", "Garlic", "Fenugreek", "All of the above"], answer: 3 },
        { question: "What does Unani medicine consider essential for healing?", options: ["Balance of the humors", "Prana energy", "Dietary supplements", "None of the above"], answer: 0 },
        { question: "What is 'Ilaj' in Unani medicine?", options: ["Diet therapy", "Herbal remedy", "Therapeutic practices", "Healing techniques"], answer: 2 }
    ],
    siddha: [
        { question: "What is Siddha medicine known for?", options: ["Herbal formulations", "Ancient surgeries", "Chanting", "Pulse Diagnosis"], answer: 0 },
        { question: "What is the key element in Siddha philosophy?", options: ["Fire", "Water", "Air", "Ether"], answer: 1 },
        { question: "Which of the following is a Siddha medicinal practice?", options: ["Marma therapy", "Yoga therapy", "Ayurvedic diet", "Acupuncture"], answer: 0 },
        { question: "In Siddha, which element is associated with Vatham?", options: ["Earth", "Fire", "Air", "Water"], answer: 2 },
        { question: "Which of the following herbs is used in Siddha medicine for skin conditions?", options: ["Turmeric", "Aloe Vera", "Neem", "Ashwagandha"], answer: 2 },
        { question: "Which Siddha practice involves using the pulse to diagnose health?", options: ["Marma", "Nadi", "Varmam", "Biodynamic"], answer: 1 },
        { question: "What is the main goal of Siddha medicine?", options: ["Purification", "Strengthening immunity", "Hormonal balance", "Relieving pain"], answer: 0 },
        { question: "What is 'Siddha Yoga' associated with?", options: ["Physical postures", "Meditation", "Diet control", "Panchakarma"], answer: 1 },
        { question: "Which mineral is used in Siddha medicine for longevity?", options: ["Sulfur", "Calcium", "Iron", "Copper"], answer: 0 },
        { question: "Siddha medicine primarily treats which aspect of the body?", options: ["Mind", "Soul", "Physical health", "All of the above"], answer: 3 }
    ],
    homeopathy: [
        { question: "What is the key principle of Homeopathy?", options: ["Dose dependency", "Like cures like", "Allopathy", "Surgery"], answer: 1 },
        { question: "Which substance is used in homeopathic remedies to treat colds?", options: ["Aconite", "Belladonna", "Sulphur", "Nux Vomica"], answer: 0 },
        { question: "What is the main preparation method in Homeopathy?", options: ["Dilution and succussion", "Fermentation", "Distillation", "Infusion"], answer: 0 },
        { question: "Which type of illness is most commonly treated with Homeopathy?", options: ["Chronic conditions", "Acute conditions", "Infections", "Broken bones"], answer: 0 },
        { question: "What does the homeopathic remedy Arnica primarily treat?", options: ["Muscle injuries", "Fever", "Cold", "Digestive issues"], answer: 0 },
        { question: "In Homeopathy, which of the following is true?", options: ["Higher potency means stronger treatment", "Dilution reduces the potency", "All remedies are based on herbal plants", "Dilution increases the potency"], answer: 3 },
        { question: "What is 'Potentization' in Homeopathy?", options: ["Making a remedy more potent", "Increasing the strength of a drug", "Diluting and shaking a remedy", "None of the above"], answer: 2 },
        { question: "Which homeopathic remedy is used for anxiety?", options: ["Aconite", "Ignatia", "Arsenicum album", "All of the above"], answer: 3 },
        { question: "Which substance is used to treat allergies in Homeopathy?", options: ["Allium cepa", "Pulsatilla", "Sulphur", "Apis mellifica"], answer: 0 },
        { question: "In Homeopathy, which of the following is treated using Rhus tox?", options: ["Arthritis", "Headaches", "Muscle strains", "All of the above"], answer: 2 }
    ],
    ayush: [] // This will combine all categories dynamically
};

// Combine all categories into the 'ayush' category
questions.ayush = [
    ...questions.ayurveda,
    ...questions.yoga,
    ...questions.unani,
    ...questions.siddha,
    ...questions.homeopathy
];

let currentCategory = '';

// Function to initialize and show the quiz based on the category
function startQuiz(category) {
    const quizSection = document.getElementById('quiz-section');
    const resultContainer = document.getElementById('result-container');
    const questionContainer = document.getElementById('question-container');

    // Show the quiz section and hide the result section initially
    quizSection.style.display = 'block';
    resultContainer.style.display = 'none';

    // Clear previous questions
    questionContainer.innerHTML = '';

    // Store the category globally for submission
    currentCategory = category;

    // Get the questions for the selected category
    const selectedQuestions = questions[category];

    // Loop through the questions and display them dynamically
    selectedQuestions.forEach((question, index) => {
        const questionElement = document.createElement('div');
        questionElement.innerHTML = `
            <p>${question.question}</p>
            ${question.options.map((option, i) => `
                <input type="radio" name="question${index}" value="${i}">${option}<br>
            `).join('')}
        `;
        questionContainer.appendChild(questionElement);
    });
}

// Function to handle quiz submission
function submitQuiz() {
    const selectedQuestions = questions[currentCategory];
    let score = 0;

    // Loop through each question and check the selected answer
    selectedQuestions.forEach((question, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption && parseInt(selectedOption.value) === question.answer) {
            score++;
        }
    });

    // Hide the quiz section and show the result
    document.getElementById('quiz-section').style.display = 'none';
    const resultContainer = document.getElementById('result-container');
    resultContainer.style.display = 'block';
    resultContainer.innerHTML = `Your score: ${score} out of ${selectedQuestions.length}`;
}
