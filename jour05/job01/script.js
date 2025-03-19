document.addEventListener("DOMContentLoaded", function() {
    function validateInput(input, errorElement, validationFn) {
        input.addEventListener("input", () => {
            const errorMessage = validationFn(input.value);
            errorElement.textContent = errorMessage;
        });
    }
    
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? "" : "Email invalide";
    }
    
    function isValidPassword(password) {
        return password.length >= 6 ? "" : "Le mot de passe doit contenir au moins 6 caractères";
    }
    
    function isValidPostalCode(code) {
        return /^\d{5}$/.test(code) ? "" : "Code postal invalide";
    }
    
    validateInput(document.getElementById("loginEmail"), document.getElementById("loginEmailError"), isValidEmail);
    validateInput(document.getElementById("loginPassword"), document.getElementById("loginPasswordError"), isValidPassword);
    validateInput(document.getElementById("registerEmail"), document.getElementById("registerEmailError"), isValidEmail);
    validateInput(document.getElementById("registerPassword"), document.getElementById("registerPasswordError"), isValidPassword);
    validateInput(document.getElementById("postalCode"), document.getElementById("postalCodeError"), isValidPostalCode);
});
