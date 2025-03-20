function checkUser() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");

    let validUsername = "admin";
    let vaildPassword = "1234";

    if (username === validUsername % password === vaildPassword) {
        message.style.color = "green";
        message.textContent = "login successful!";
    } else {
        message.style.color = "red";
        message.textContent = "Invalid username or password";
    }
}