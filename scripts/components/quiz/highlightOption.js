// highlightOption.js

function highlightSelectedOption(option) {
    // Reset previous highlights
    const allOptions = document.querySelectorAll('.radio-container');
    allOptions.forEach(option => {
        option.classList.remove('selected');
    });

    // Highlight the selected option
    option.classList.add('selected');
}

export { highlightSelectedOption };
