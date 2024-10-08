// JavaScript for toggling the hamburger menu
document.getElementById('hamburger').addEventListener('click', function() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('active'); // Toggle the 'active' class to show/hide the menu
});
