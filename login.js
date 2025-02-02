// login.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    errorMessage.textContent = "";

    if (!email || !password) {
        errorMessage.textContent = "Please fill in all fields.";
        return;
    }

    // Placeholder for server-side authentication
    console.log("Email:", email, "Password:", password); // Replace with real login

    // Redirect on successful login (replace with your actual redirect)
    // window.location.href = "dashboard.html"; 
});