// Check login status in localStorage and update navbar
window.onload = function () {
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    if (isLoggedIn === 'true') {
        // Hide login link, show profile container
        document.getElementById('login-link-container').style.display = 'none';
        document.getElementById('profile-container').style.display = 'flex';
        document.getElementById('dropdown-content').style.display = 'none';
    } else {
        // Show login link, hide profile container
        document.getElementById('login-link-container').style.display = 'block';
        document.getElementById('profile-container').style.display = 'none';
        document.getElementById('dropdown-content').style.display = 'none';
    }
}

// Set login status
function setLoginStatus() {
    localStorage.setItem('isLoggedIn', 'true');
    window.location.reload();
}

// Logout function
function logout() {
    localStorage.removeItem('isLoggedIn');
    window.location.reload();
}

// Toggle dropdown visibility
function toggleDropdown() {
    var dropdownContent = document.getElementById("dropdown-content");
    dropdownContent.style.display = (dropdownContent.style.display === "block") ? "none" : "block";
}

// Your existing JS code (if any) should remain as is below
