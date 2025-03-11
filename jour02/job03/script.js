function addOne() {
    var compteur = document.getElementById("compteur");
    compteur.textContent = parseInt(compteur.textContent) + 1 ;
}

window.onload = function() {
    var button = document.getElementById("button");
    button.addEventListener("click", addOne);
}