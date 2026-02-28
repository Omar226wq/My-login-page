document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const uName = document.getElementById('username').value;
    const pWord = document.getElementById('password').value;

    // Use "admin" and "1234" for testing
    if(uName === "admin" && pWord === "1234") {
        alert("Login Successful!");
        window.location.href = "home.html";
    } else {
        alert("Invalid username or password!");
    }
});
