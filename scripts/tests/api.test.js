const { fetchQuizQuestions } = require("../api.js");

describe("API", () => {
    describe("fetchQuizQuestions", () => {
        test("fetches quiz questions successfully", async () => {
            const data = await fetchQuizQuestions("science");
            expect(data).toBeDefined();
            // Add more specific tests if needed
        });

        // Add more tests for error handling, edge cases, etc.
    });
});
