import { handleError } from "../utils.js";
import { showLoader, hideLoader } from "./loader.js";
import { handleQuizComplete } from "./quizComplete.js";
import { answerIsCorrect, answerIsWrong } from "./showAnswer.js";

async function loadQuizQuestions(formattedData) {
    try {
        // Initialize current question index
        let currentQuestionIndex = 0;
        let score = 0;

        // Function to load each question
        function loadQuestion(formattedData, currentQuestionIndex) {
            try {
                // Hide Header
                const headerTag = document.getElementById("header");
                headerTag.style.display = 'none';
                // Get the quiz container element
                const quizContainer = document.getElementById("question-card");
                quizContainer.style.display = 'inherit';
                // Clear the quiz container
                quizContainer.innerHTML = '';

                // Create elements to display the question
                const categoryDiv = document.createElement('div');
                const categoryText = document.createElement('h2');
                categoryDiv.className = 'category';
                categoryText.textContent = `${formattedData[currentQuestionIndex].category}`;
                categoryDiv.appendChild(categoryText);
                quizContainer.appendChild(categoryDiv);

                const questionDiv = document.createElement('div');
                const questionHeader = document.createElement('h4');
                questionHeader.textContent = `Question ${currentQuestionIndex + 1}`;
                questionHeader.className = 'question-header';
                const questionText = document.createElement('p');
                questionText.className = 'question-text';
                questionText.textContent = formattedData[currentQuestionIndex].question;
                
                questionDiv.appendChild(questionHeader);
                questionDiv.appendChild(questionText);
                quizContainer.appendChild(questionDiv);

                // Create elements for multiple choice options
                const optionsList = document.createElement('ul');
                formattedData[currentQuestionIndex].answers.forEach((answer, index) => {
                    const option = document.createElement('li');
                    option.className = 'answer-option';

                    const optionDiv = document.createElement('div');
                    optionDiv.textContent = answer;
                    optionDiv.classList.add('option-div');

                    optionDiv.addEventListener('click', () => {
                        handleAnswerSelection(index);
                    });

                    option.appendChild(optionDiv);
                    optionsList.appendChild(option);
                });
                quizContainer.appendChild(optionsList);

                // // Create submit button
                // const submitButton = document.createElement('button');
                // submitButton.textContent = 'Submit';
                // submitButton.addEventListener('click', () => {
                //     // Handle submission
                // });
                // quizContainer.appendChild(submitButton);
            } catch (error) {
                // Handle any errors that occur during loading questions
                handleError(error);
            }
        }

        // Function to handle user's answer selection
        function handleAnswerSelection(selectedIndex) {
            const correctIndex = formattedData[currentQuestionIndex].correctAnswerIndex;
            if (selectedIndex === correctIndex) {
                // User selected the correct answer
                answerIsCorrect(correctIndex, () => {
                    score++;
                    // Load the next question or handle quiz completion
                    loadNextQuestion();
                });
            } else {
                // User selected the wrong answer
                answerIsWrong(selectedIndex, correctIndex, () => {
                    // Load the next question or handle quiz completion
                    loadNextQuestion();
                });
            }
        }

        // Function to load the next question or handle quiz completion
        function loadNextQuestion() {
            currentQuestionIndex++;
            if (currentQuestionIndex < formattedData.length) {
                loadQuestion(formattedData, currentQuestionIndex);
            } else {
                // Quiz completed
                handleQuizComplete(score, formattedData.length);
            }
        }

        // Load the first question
        showLoader();
        await loadQuestion(formattedData, currentQuestionIndex);
        hideLoader();

    } catch (error) {
        // Handle any errors that occur during loading questions
        handleError(error);
    }
}

export { loadQuizQuestions };
