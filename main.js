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

// Load the header and footer, then apply the hamburger menu and highlight current page
loadHTML('header.html', 'header', function() {
    // Add event listener for the hamburger menu
    document.getElementById('hamburger').addEventListener('click', function() {
        const navbar = document.getElementById('navbar');
        navbar.classList.toggle('active');
    });

    // Highlight the current page in the navbar
    highlightCurrentPage();
});

loadHTML('footer.html', 'footer');

// Function to highlight the current page
function highlightCurrentPage() {
    const currentPage = window.location.pathname; // Get the current path
    const navbarLinks = document.querySelectorAll('#navbar a'); // Get all nav links

    navbarLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage || link.getAttribute('href') === currentPage.split('/').pop()) {
            link.id = 'current-page'; // Set the ID on the current link
        }
    });
}

// EmailJS initialization
(function() {
    emailjs.init("7dO-EDCQAxfoWWNDb"); // Add your public key from EmailJS here
})();

// Handle contact form submission
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            // Send form data using EmailJS
            emailjs.sendForm('service_fvqgtu4', 'template_3sd7s7t', this)
                .then(function() {
                    document.getElementById('status').innerText = "Meldingen er sendt!";
                }, function(error) {
                    document.getElementById('status').innerText = "Noe gikk galt, prøv igjen.";
                });
        });
    }
});
