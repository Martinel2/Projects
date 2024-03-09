document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        // Here you can send a request to your backend to authenticate the user
        // If authentication is successful, set isLoggedIn to true and redirect to market.html
        // For simplicity, let's assume the login is successful always
        isLoggedIn = true;
        window.location.href = "market.html";
    });
});
