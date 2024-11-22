const questions = {
    ayurveda: [
      { question: "What is Ayurveda's primary focus?", options: ["Yoga", "Balance of Doshas", "Herbs", "Exercise"], answer: 1 },
    ],
    yoga: [
      { question: "What is the purpose of Naturopathy?", options: ["Healing through Nature", "Modern Medicine", "Exercise", "Surgery"], answer: 0 },
    ],
    unani: [
      { question: "Which element is vital in Unani medicine?", options: ["Fire", "Air", "Humors", "Water"], answer: 2 },
    ],
    siddha: [
      { question: "What is Siddha medicine known for?", options: ["Herbal formulations", "Ancient surgeries", "Chanting", "Pulse Diagnosis"], answer: 0 },
    ],
    homeopathy: [
      { question: "What is the key principle of Homeopathy?", options: ["Dose dependency", "Like cures like", "Allopathy", "Surgery"], answer: 1 },
    ],
  };
  
  function startQuiz(category) {
    const quizSection = document.getElementById("quiz-section");
    const questionContainer = document.getElementById("question-container");
    questionContainer.innerHTML = "";
  
    let selectedQuestions = [];
    if (category === "ayush") {
      selectedQuestions = Object.values(questions).flat();
    } else {
      selectedQuestions = questions[category];
    }
  
    selectedQuestions.forEach((q, index) => {
      const questionDiv = document.createElement("div");
      questionDiv.className = "question";
  
      const questionText = document.createElement("p");
      questionText.textContent = `${index + 1}. ${q.question}`;
      questionDiv.appendChild(questionText);
  
      const optionsList = document.createElement("ul");
      optionsList.className = "options";
      q.options.forEach((option, i) => {
        const optionItem = document.createElement("li");
        const optionInput = document.createElement("input");
        optionInput.type = "radio";
        optionInput.name = `question${index}`;
        optionInput.value = i;
        optionItem.appendChild(optionInput);
        optionItem.appendChild(document.createTextNode(option));
        optionsList.appendChild(optionItem);
      });
      questionDiv.appendChild(optionsList);
      questionContainer.appendChild(questionDiv);
    });
  
    quizSection.style.display = "block";
  }
  
  function submitQuiz() {
    alert("Quiz submitted! Implement scoring logic as needed.");
  }
  