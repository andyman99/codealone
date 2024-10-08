// Select all images in the gallery
const galleryImages = document.querySelectorAll('.gallery img');

// Get modal elements
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalClose = document.getElementById('modal-close');

// Preload the high-quality images
const preloadImages = () => {
    galleryImages.forEach((img) => {
        const highQualitySrc = img.src.replace('low-quality', 'high-quality'); // Get high-quality version of the image
        const preloadedImage = new Image(); // Create a new image element for preloading
        preloadedImage.src = highQualitySrc; // Set its source to the high-quality image path
    });
};

// Call preloadImages function to preload all high-quality images
preloadImages();

// Add click event to each gallery image to open the modal
galleryImages.forEach((img) => {
    img.addEventListener('click', (e) => {
        modal.style.display = 'flex'; // Show the modal
        const highQualitySrc = e.target.src.replace('low-quality', 'high-quality'); // Replace 'low-quality' with 'high-quality' in the image path
        modalImg.src = highQualitySrc; // Set the modal image source to the high-quality image
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