const { formatData, handleError, shuffleArray } = require("../utils.js");

describe("Utils", () => {
    describe("formatData", () => {
        test("formats data correctly", () => {
            const data = [
                {
                    category: "Science",
                    question: { text: "What is the capital of France?" },
                    correctAnswer: "Paris",
                    incorrectAnswers: ["London", "Berlin", "Madrid"]
                }
            ];

            const formattedData = formatData(data);

            expect(formattedData).toHaveLength(1);
            expect(formattedData[0]).toHaveProperty("category", "Science");
            expect(formattedData[0]).toHaveProperty("question", "What is the capital of France?");
            expect(formattedData[0]).toHaveProperty("answers", expect.arrayContaining(["Paris", "London", "Berlin", "Madrid"]));
            expect(formattedData[0].answers).toContain("Paris");
            expect(formattedData[0]).toHaveProperty("correctAnswer", "Paris");
        });

        test("handles invalid data", () => {
            const data = null;

            const formattedData = formatData(data);

            expect(formattedData).toEqual([]);
        });
    });

    // Add more tests for other utility functions if needed
});
