function validateForm() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;

    // Check if name contains only letters
    const namePattern = /^[A-Za-z\s]+$/;
    if (!namePattern.test(name)) {
        alert("Please enter letters only in the name field.");
        return false;
    }

    // Check if phone contains only numbers
    const phonePattern = /^[0-9]+$/;
    if (!phonePattern.test(phone)) {
        alert("Please enter numbers only in the phone field.");
        return false;
    }

    return true; // Allow form submission
}
