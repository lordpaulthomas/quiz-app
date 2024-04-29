function showLoader() {
    // Display loader element
    const loaderElement = document.getElementById('loader');
    loaderElement.style.display = 'block';
}

function hideLoader() {
    // Hide loader element
    const loaderElement = document.getElementById('loader');
    loaderElement.style.display = 'none';
}

export { showLoader, hideLoader };
