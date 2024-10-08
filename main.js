// Function to load external HTML content
function loadHTML(file, elementId, callback) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
            if (callback) callback(); // Execute the callback after loading
        })
        .catch(error => console.log('Error loading HTML:', error));
}

// Load the header and footer and then apply the hamburger menu logic
loadHTML('header.html', 'header', function() {
    // Add event listener for the hamburger menu
    document.getElementById('hamburger').addEventListener('click', function() {
        const navbar = document.getElementById('navbar');
        navbar.classList.toggle('active'); // Toggle the 'active' class to show/hide the menu
    });
});

loadHTML('footer.html', 'footer');
