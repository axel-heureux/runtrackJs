// Utilisateurs avec leurs informations (peut être remplacé par un fichier JSON dans une version réelle)
const users = [
    { "id": 1, "username": "john_doe@laplateforme.io", "password": "password123", "role": "student" },
    { "id": 2, "username": "jane_smith@laplateforme.io", "password": "securePass456", "role": "moderator" },
    { "id": 3, "username": "admin_user@laplateforme.io", "password": "adminPass789", "role": "admin" },
    { "id": 4, "username": "peter_parker@laplateforme.io", "password": "spiderMan123", "role": "student" },
    { "id": 5, "username": "mary_jane@laplateforme.io", "password": "maryJanePass1", "role": "moderator" }
];

// Fonction pour récupérer les paramètres GET de l'URL
function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return params.get("email"); // Récupère l'email de l'utilisateur dans l'URL
}

// Fonction pour afficher ou masquer les liens en fonction du rôle de l'utilisateur
function displayLinksBasedOnRole() {
    const email = getQueryParams();  // Récupère l'email des paramètres GET
    const user = users.find(user => user.username === email);  // Trouve l'utilisateur correspondant

    // Récupère l'élément pour le calendrier et pour la connexion
    const calendarLink = document.getElementById("calendar-link");  // Assurez-vous d'ajouter un ID pour le lien vers le calendrier
    const adminLink = document.getElementById("admin-link");
    const backofficeLink = document.getElementById("backoffice-link");

    if (user) {
        // Affiche ou cache les liens en fonction du rôle de l'utilisateur
        if (calendarLink) {
            calendarLink.style.display = "block";  // Affiche le lien du calendrier si l'utilisateur est connecté
        }

        // Affiche ou cache les autres liens en fonction du rôle
        if (user.role === "admin") {
            adminLink.style.display = "block";
            backofficeLink.style.display = "block";
        } else if (user.role === "moderator") {
            backofficeLink.style.display = "block";
        }
    } else {
        // Si l'utilisateur n'est pas trouvé, rediriger vers la page de connexion
        // Vous pouvez décommenter cette ligne si vous souhaitez faire une redirection
        // window.location.href = 'connexion.html'; 
        
        // Sinon, masquer le lien du calendrier
        if (calendarLink) {
            calendarLink.style.display = "none";
        }
        // Vous pouvez également afficher un message ou effectuer une action ici
        alert("Vous devez vous connecter pour accéder au calendrier.");
    }
}

// Appel de la fonction pour ajuster les liens au chargement de la page
window.onload = displayLinksBasedOnRole;
