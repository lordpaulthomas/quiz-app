import { handleError } from "./utils.js";

async function fetchQuizQuestions(category) {
    const baseUrl = 'https://the-trivia-api.com/v2/questions?categories=';
    const url = `${baseUrl}${category}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        handleError('Error fetching data:', error);
        return null;
    }
}

export { fetchQuizQuestions };

