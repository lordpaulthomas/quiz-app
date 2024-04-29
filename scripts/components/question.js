import { handleError } from "../utils.js";
import { showLoader, hideLoader } from "./loader.js";
import { handleQuizComplete } from "../quizComplete.js";
import { showResult } from "./result.js";

async function loadQuizQuestions(formattedData) {
    try {
        // Initialize current question index
        let currentQuestionIndex = 0;
        let score = 0;

        // Function to load each question
        function loadQuestion(formattedData, currentQuestionIndex) {
            try {
                // Get the quiz container element
                const quizContainer = document.getElementById("question-card");

                // Clear the quiz container
                quizContainer.innerHTML = '';

                // Create elements to display the question
                const questionDiv = document.createElement('div');
                const questionHeader = document.createElement('h4');
                questionHeader.textContent = `Question ${currentQuestionIndex + 1}`;
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
                    option.className = 'answer-option'

                    // Create a container for the radio button and label
                    const radioContainer = document.createElement('div');
                    radioContainer.classList.add('radio-container');

                    const radioBtn = document.createElement('input');
                    radioBtn.type = 'radio';
                    radioBtn.name = 'quizOption';
                    radioBtn.value = index; // Use index as value to identify the selected option
                    radioBtn.className = 'radioBtn';

                    const innerCircle = document.createElement('span');
                    innerCircle.className = 'inner-circle'

                    radioContainer.appendChild(radioBtn);
                    radioContainer.appendChild(innerCircle);


                    const label = document.createElement('label');
                    label.textContent = answer;
                    radioContainer.appendChild(label);

                    option.appendChild(radioContainer);
                    optionsList.appendChild(option);
                });
                quizContainer.appendChild(optionsList);

                // Create submit button
                const submitButton = document.createElement('button');
                submitButton.textContent = 'Submit';
                submitButton.addEventListener('click', () => {
                    const selectedOption = document.querySelector('input[name="quizOption"]:checked');
                    if (selectedOption) {
                        // Handle user's selection
                        const selectedAnswerIndex = parseInt(selectedOption.value);
                        const correctAnswerIndex = formattedData[currentQuestionIndex].correctAnswerIndex;
                        const isCorrect = selectedAnswerIndex === correctAnswerIndex;
                        if (isCorrect) score++;
                        // Load the next question or handle quiz completion
                        currentQuestionIndex++;
                        if (currentQuestionIndex < formattedData.length) {
                            loadQuestion(formattedData, currentQuestionIndex);
                        } else {
                            console.log('Quiz completed!');
                            console.log('Score: ', score / formattedData.length);
                            // Call the quiz complete function
                            handleQuizComplete(score, formattedData.length);
                        }
                    } else {
                        console.log('No option selected');
                    }
                });
                quizContainer.appendChild(submitButton);
            } catch (error) {
                // Handle any errors that occur during loading questions
                handleError(error);
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
