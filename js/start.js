const quizQuestions = [
    {
      question: "How far is the nearest star from Earth?",
      options: ["4.37 light years", "10.5 light years", "2 light years", "1 light year"],
      answer: 0
    },
    {
      question: "What is the name of the largest known star?",
      options: ["Betelgeuse", "UY Scuti", "Sirius", "Polaris"],
      answer: 1
    },
    // Add more questions...
  ];
  
  let currentQuestionIndex = 0;
  
  const questionElement = document.getElementById('question');
  const answerOptionsElement = document.getElementById('answer-options');
  const feedbackElement = document.getElementById('feedback');
  const nextButton = document.getElementById('next-btn');
  
  function loadQuestion() {
    feedbackElement.textContent = '';
    nextButton.style.display = 'none';
    
    const currentQuestion = quizQuestions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    answerOptionsElement.innerHTML = '';
    
    currentQuestion.options.forEach((option, index) => {
      const li = document.createElement('li');
      li.textContent = option;
      li.addEventListener('click', () => selectAnswer(index));
      answerOptionsElement.appendChild(li);
    });
  }
  
  function selectAnswer(selectedIndex) {
    const correctAnswerIndex = quizQuestions[currentQuestionIndex].answer;
    if (selectedIndex === correctAnswerIndex) {
      feedbackElement.textContent = "Correct!";
      nextButton.style.display = 'inline-block';
    } else {
      feedbackElement.textContent = "Try again!";
    }
  }
  
  nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
      loadQuestion();
    } else {
      feedbackElement.textContent = "You've completed the quiz!";
      nextButton.style.display = 'none';
    }
  });
  
  // Load the first question when the page loads
  loadQuestion();
  