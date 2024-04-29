const { loadQuizQuestions } = require("../components/question.js");

// Mock formatData and handleError functions
jest.mock("../components/question.js", () => ({
    formatData: jest.fn(),
    handleError: jest.fn()
}));

describe("Question Component", () => {
    // Mock DOM setup
    beforeEach(() => {
        document.body.innerHTML = `
            <div id="question-card"></div>
        `;
    });

    test("loads quiz questions correctly", async () => {
        const formattedData = [
            {
                question: "What is the capital of France?",
                answers: ["Paris", "London", "Berlin", "Madrid"],
                correctAnswerIndex: 0
            }
        ];

        await loadQuizQuestions(formattedData);

        // Add assertions to verify the correct rendering of quiz questions
        expect(document.getElementById('question-card').innerHTML).toContain("What is the capital of France?");
        // Add more assertions as needed
    });

    // Add more tests for other functionalities of the question component
});
