// script.js
const passwordForm = document.getElementById("passwordForm");
const messageBox = document.getElementById("messageBox");

passwordForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password === confirmPassword) {
        messageBox.classList.remove("hidden");
        setTimeout(() => {
            messageBox.classList.add("hidden");
            passwordForm.reset();
        }, 3000);
    } else {
        alert("Passwords do not match. Please try again.");
    }
});
