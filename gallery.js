// Select all images in the gallery
const galleryImages = document.querySelectorAll('.gallery img');

// Get modal elements
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalClose = document.getElementById('modal-close');

// Add click event to each gallery image
galleryImages.forEach((img) => {
    img.addEventListener('click', (e) => {
        modal.style.display = 'flex'; // Show the modal
        modalImg.src = e.target.src; // Set the modal image source to the clicked image
    });
});

// Add click event to close the modal
modalClose.addEventListener('click', () => {
    modal.style.display = 'none'; // Hide the modal
});

// Add event listener to close modal when clicking outside the image
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none'; // Hide the modal
    }
});
