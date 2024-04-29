function showResult(score, totalQuestions) {
    // Get the result card element
    const resultCard = document.querySelector('.result-card');

    // Create result container element
    const resultContainer = document.createElement('div');
    resultContainer.classList.add('result-container');

    // Create result title element
    const resultTitle = document.createElement('div');
    resultTitle.classList.add('result-title');
    resultTitle.textContent = 'Quiz Result';

    // Create result score element
    const resultScore = document.createElement('div');
    resultScore.classList.add('result-score');
    resultScore.textContent = `Your score: ${score} / ${totalQuestions}`;

    // Append elements to result container
    resultContainer.appendChild(resultTitle);
    resultContainer.appendChild(resultScore);

    // Append result container to the result card
    resultCard.appendChild(resultContainer);
}

export { showResult };

