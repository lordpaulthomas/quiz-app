function formatData(data) {
    if (!data || !Array.isArray(data)) {
        handleError('Invalid data format');
        return [];
    }

    const formattedQuestions = data.map(item => {
        const allAnswers = [item.correctAnswer, ...item.incorrectAnswers];
        const shuffledAnswers = shuffleArray(allAnswers);
        // Find the index of the correct answer within the shuffledAnswers array
        const correctAnswerIndex = shuffledAnswers.findIndex(answer => answer === item.correctAnswer);

        return {
            category: item.category,
            question: item.question.text,
            answers: shuffledAnswers,
            correctAnswerIndex: correctAnswerIndex // Assign the index instead of the answer itself
        };
    });

    return formattedQuestions;
}

  
  // Function to handle errors
  function handleError(error) {
    // Display error message to the user
    console.error('An error occurred: ', error);
  }

// Function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  
  // Export utility functions
  export { formatData, handleError, shuffleArray};
  