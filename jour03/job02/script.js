$(document).ready(function () {
    const correctOrder = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"];
    let currentOrder = [...correctOrder];

    // Fonction pour afficher les images
    function createSlots() {
        $("#game-container").empty();
        currentOrder.forEach((imgSrc) => {
            let img = $("<img>").attr("src", imgSrc).addClass("draggable");
            $("#game-container").append(img);
        });

        // Activer le drag & drop
        $("#game-container").sortable({
            update: function () {
                currentOrder = $("#game-container img").map(function () {
                    return $(this).attr("src");
                }).get();
            }
        }).disableSelection();
    }

    // Fonction pour mélanger les images
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Bouton Mélanger
    $("#shuffle").click(function () {
        shuffleArray(currentOrder);
        createSlots();
        $("#message").text("");
    });

    // Bouton Vérifier
    $("#check").click(function () {
        if (JSON.stringify(currentOrder) === JSON.stringify(correctOrder)) {
            $("#message").text("Vous avez gagné !").css("color", "green");
        } else {
            $("#message").text("Vous avez perdu !").css("color", "red");
        }
    });

    // Afficher les images au chargement
    createSlots();
});