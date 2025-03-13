document.getElementById("button").addEventListener("click", function() {
    fetch("expression.txt")
    .then(reponse => reponse.text())
    .then(data => {
        const p = document.createElement("p");
        p.textContent = data ;
        document.getElementById("expression").appendChild(p) ;
    })
    .catch(error => console.error("Erreur lors du chargement du fichier:", error))
})