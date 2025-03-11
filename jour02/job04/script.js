function captureKey (event) {
    var key = event.key;
    var textarea = document.getElementById("keylogger");

    if (key.match(/[a-zA-Z]/)) {
        if (document.activeElement === textarea) {
            textarea.value += key + key;
        } else {
            textarea.value += key;
        }
    }
}

window.addEventListener("keydown", captureKey);