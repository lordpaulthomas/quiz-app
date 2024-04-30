// quizComplete.js

import { showResult } from "./result.js";

function handleQuizComplete(score, totalQuestions) {
    // Hide the quiz section
    const quizSection = document.getElementById('question-card');
    quizSection.style.display = 'none';

    // Show header section
    const headerTag = document.getElementById('header');
    headerTag.style.display = 'inherit';

    // Show the result section
    const resultSection = document.querySelector('.result-card');
    resultSection.style.display = 'block';

    // Display the result
    showResult(score, totalQuestions);

    // Create a "Play Again" button
    const playAgainButton = document.createElement('button');
    playAgainButton.textContent = 'Play Again';
    playAgainButton.id = 'play-again';

    // Add event listener to the play again button
    playAgainButton.addEventListener('click', () => {
        // Reset the quiz by reloading the page
        window.location.reload();
    });

    // Append the "Play Again" button to the result section
    resultSection.appendChild(playAgainButton);
}

export { handleQuizComplete };
