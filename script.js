function validateForm() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    if (username === "" || password === "") {
        errorMessage.innerText = "Both fields are required!";
        return false;
    }

    // Corrected: Validate if password length is less than 6 characters
    if (password.length < 6) {
        errorMessage.innerText = "Password must be at least 6 characters!";
        return false;
    }

    alert("Login successful!");
    return true;
}
