// Function to show the modal with the specified title, image, and description
function showModal(title, description, imageSrc) {
    // Set the modal content
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalDescription').innerText = description;
    document.getElementById('modalImage').src = imageSrc;

    // Display the modal
    const modal = document.getElementById('myModal');
    modal.style.display = 'block';
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('myModal');
    if (event.target === modal) {
        closeModal();
    }
};

// Optional: Close the modal when the 'Escape' key is pressed
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});
