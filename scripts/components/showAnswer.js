function answerIsCorrect(correctAnswerIndex, nextQuestionCallback) {
    const correctOption = document.querySelectorAll('.answer-option')[correctAnswerIndex];
    if (correctOption) {
        correctOption.style.backgroundColor = 'green';
        setTimeout(() => {
            correctOption.style.backgroundColor = ''; // Reset to original background color
            nextQuestionCallback();
        }, 3000);
    } else {
        console.error('Correct option not found in the DOM');
        nextQuestionCallback();
    }
}

function answerIsWrong(selectedAnswerIndex, correctAnswerIndex, nextQuestionCallback) {
    const correctOption = document.querySelectorAll('.answer-option')[correctAnswerIndex];
    const selectedOption = document.querySelectorAll('.answer-option')[selectedAnswerIndex];
    if (correctOption && selectedOption) {
        correctOption.style.backgroundColor = 'green';
        selectedOption.style.backgroundColor = 'red';
        setTimeout(() => {
            correctOption.style.backgroundColor = ''; // Reset to original background color
            selectedOption.style.backgroundColor = ''; // Reset to original background color
            nextQuestionCallback();
        }, 3000);
    } else {
        console.error('Correct or selected option not found in the DOM');
        nextQuestionCallback();
    }
}

export { answerIsCorrect, answerIsWrong}