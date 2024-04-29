// ui.js

// Function to hide the category selection form
function hideCategorySelectionForm() {
    const categoryForm = document.getElementById('category-choices');
    categoryForm.style.display = 'none';
}

// Function to show the category selection form
function showCategorySelectionForm() {
    const categoryForm = document.getElementById('category-choices');
    categoryForm.style.display = 'block';
}

// Call this function when the quiz starts
function quizStart() {
    hideCategorySelectionForm();
}

// Call this function when the quiz ends
function quizEnd() {
    showCategorySelectionForm();
}


export {hideCategorySelectionForm, showCategorySelectionForm, quizStart, quizEnd}