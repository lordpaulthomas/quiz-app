// handleSubmission.js

function handleSubmission(formattedData, currentQuestionIndex) {
    // Find the correct answer index
    const correctAnswerIndex = formattedData[currentQuestionIndex].correctAnswerIndex;

    // Find the selected answer index
    const selectedOption = document.querySelector('input[name="quizOption"]:checked');
    const selectedAnswerIndex = selectedOption ? parseInt(selectedOption.value) : -1;

    // Highlight correct answer in green
    const optionsList = document.querySelectorAll('.radio-container');
    optionsList[correctAnswerIndex].classList.add('correct');

    // Highlight selected answer in red if wrong
    if (selectedAnswerIndex !== correctAnswerIndex) {
        optionsList[selectedAnswerIndex].classList.add('incorrect');
    }

    // Disable radio buttons after submission
    optionsList.forEach(option => {
        const radioBtn = option.querySelector('input[type="radio"]');
        radioBtn.disabled = true;
    });

    // Handle other submission logic (e.g., score calculation)
    // You can add your logic here
}

export { handleSubmission };
