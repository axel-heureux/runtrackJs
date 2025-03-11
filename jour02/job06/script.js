        // Séquence du Code Konami
        const konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",];
        let konamiInput = [];

        // Fonction qui vérifie si la séquence du Code Konami est correcte
        function checkKonamiCode(event) {
            konamiInput.push(event.code);
            if (konamiInput.length > konamiCode.length) {
                konamiInput.shift(); // Retirer le premier élément si trop long
            }

            if (konamiInput.join() === konamiCode.join()) {
                document.body.classList.add('konami'); // Ajouter la classe "konami" pour styliser la page
            }
        }

        // Écouteur d'événements pour la saisie du Code Konami
        window.addEventListener('keydown', checkKonamiCode);