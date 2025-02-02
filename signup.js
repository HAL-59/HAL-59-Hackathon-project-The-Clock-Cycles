// signup.js
document.getElementById('signinForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessage = document.getElementById('errorMessage');

    errorMessage.textContent = "";

    if (!email || !password || !newPassword || !confirmPassword) {
        errorMessage.textContent = "Please fill in all fields.";
        return;
    }

    if (newPassword !== confirmPassword) {
        errorMessage.textContent = "New and Confirm passwords do not match.";
        return;
    }

    // Placeholder for server-side authentication
    console.log("Email:", email, "Password:", password, "New Password:", newPassword);

    // Redirect on successful login (replace with your actual redirect)
    // window.location.href = "dashboard.html"; 
});

// Real-time password match check (optional - provides immediate feedback)
const newPasswordInput = document.getElementById('newPassword');
const confirmPasswordInput = document.getElementById('confirmPassword');

confirmPasswordInput.addEventListener('input', function() {
    if (newPasswordInput.value !== confirmPasswordInput.value) {
        errorMessage.textContent = "Passwords do not match."; // Show error immediately
    } else {
        errorMessage.textContent = ""; // Clear error if they match
    }
});

newPasswordInput.addEventListener('input', function() {
    if (newPasswordInput.value !== confirmPasswordInput.value) {
        errorMessage.textContent = "Passwords do not match."; // Show error immediately
    } else {
        errorMessage.textContent = ""; // Clear error if they match
    }
});