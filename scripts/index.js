// index.js

import { handleError, formatData } from "./utils.js";
import { fetchQuizQuestions } from "./api.js";
import { loadQuizQuestions } from "./components/question.js";
import { getCategory } from "./components/dropdownMenu.js";
import { handleQuizComplete } from "./components/quizComplete.js"; // Import handleQuizComplete function
import { quizStart, quizEnd } from "./ui.js"; // Import the UI-related functions

// Define an async function to fetch and process quiz questions
async function startQuiz() {
    try {
        // Get the selected category from the dropdown menu
        const selectedCategory = await getCategory();

        // Fetch quiz questions for the selected category
        const data = await fetchQuizQuestions(selectedCategory);

        // Process the data (format, shuffle, etc.)
        const formattedData = formatData(data);

        // Start loading questions
        await loadQuizQuestions(formattedData, handleQuizComplete);

        // Call quizStart function to hide category selection form
        quizStart();

    } catch (error) {
        // Handle any errors that occur during fetching or processing
        handleError(error);
    }
}

// Start the quiz when the page loads
startQuiz();
