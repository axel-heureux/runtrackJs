// Fonction pour vérifier si l'email appartient au domaine @laplateforme.io
function isValidEmail(email) {
    const domain = "@laplateforme.io";
    return email.endsWith(domain);
}

// Gestion de la soumission du formulaire d'inscription
document.getElementById("registration-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Empêche l'envoi réel du formulaire

    const email = document.getElementById("email").value;
    const errorMessage = document.getElementById("error-message");

    // Vérifie si l'email est valide
    if (isValidEmail(email)) {
        errorMessage.style.display = "none";  // Cache le message d'erreur si l'email est valide
        alert("Inscription réussie !");
        
        window.location.href = "connexion.html"
        // Vous pouvez ajouter ici une logique pour envoyer le formulaire ou rediriger l'utilisateur
        // Par exemple : window.location.href = 'dashboard.html';
    } else {
        errorMessage.style.display = "block";  // Affiche le message d'erreur si l'email n'est pas valide
    }
});
