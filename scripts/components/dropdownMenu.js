function getCategory() {
    return new Promise((resolve, reject) => {
        const categoryForm = document.getElementById('category-choices');

        // Add an event listener to the form submission
        categoryForm.addEventListener('submit', function(event) {
            // Prevent the default form submission behavior
            event.preventDefault();
        
            // Get the selected category from the dropdown menu
            const selectedCategory = document.getElementById('select').value;
            
            // Resolve the promise with the selected category
            resolve(selectedCategory);
        });
    });
}

export { getCategory };
