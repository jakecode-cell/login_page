function validateForm() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    if (username === "" || password === "") {
        errorMessage.innerText = "Both fields are required!";
        return false;
    }

    // Mistake: password length validation is not correct
    if (password.length > 6) {
        errorMessage.innerText = "Password must be at least 6 characters!";
        return false;
    }

    alert("Login successful!");
    return true;
}
