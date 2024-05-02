function lockScreen() {
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);
}

function unlockScreen() {
    const overlay = document.querySelector('.overlay');
    if (overlay) {
        overlay.parentNode.removeChild(overlay);
    }
}

function answerIsCorrect(correctAnswerIndex, nextQuestionCallback) {
    lockScreen(); // Lock the screen
    const questionCard = document.querySelector('.question-card');
    const correctOption = document.querySelectorAll('.answer-option')[correctAnswerIndex];
    if (correctOption) {
        correctOption.style.backgroundColor = 'green';
        correctOption.style.color = '#ffffff';
        // questionCard.style.backgroundColor = 'grey';
        setTimeout(() => {        
            questionCard.style.backgroundColor = '';
            correctOption.style.backgroundColor = ''; // Reset to original background color
            unlockScreen(); // Unlock the screen
            nextQuestionCallback();
        }, 3000);
    } else {
        console.error('Correct option not found in the DOM');
        unlockScreen(); // Unlock the screen in case of error
        nextQuestionCallback();
    }
}

function answerIsWrong(selectedAnswerIndex, correctAnswerIndex, nextQuestionCallback) {
    lockScreen(); // Lock the screen
    const questionCard = document.querySelector('.question-card');
    const correctOption = document.querySelectorAll('.answer-option')[correctAnswerIndex];
    const selectedOption = document.querySelectorAll('.answer-option')[selectedAnswerIndex];
    if (correctOption && selectedOption) {
        questionCard.style.backgroundColor = 'grey';
        correctOption.style.backgroundColor = 'green';
        correctOption.style.color = '#ffffff';
        selectedOption.style.backgroundColor = 'red';
        setTimeout(() => {
            questionCard.style.backgroundColor = '';
            correctOption.style.backgroundColor = ''; // Reset to original background color
            selectedOption.style.backgroundColor = ''; // Reset to original background color
            unlockScreen(); // Unlock the screen
            nextQuestionCallback();
        }, 3000);
    } else {
        console.error('Correct or selected option not found in the DOM');
        unlockScreen(); // Unlock the screen in case of error
        nextQuestionCallback();
    }
}

export { answerIsCorrect, answerIsWrong };
