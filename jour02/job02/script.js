function showHide () {
    var article = document.getElementById("citation");

    if (article) {
        article.remove();
    } else {
        var newArticle = document.createElement("article");
        newArticle.id = "citation";
        newArticle.textContent = "L'important n'est pas la chute, mais l'atterissage"
        document.body.appendChild(newArticle);
    }
}