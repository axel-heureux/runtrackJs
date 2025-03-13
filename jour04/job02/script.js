function jsonValueKey(jsonString, key) {
    try {
        const jsonObject = JSON.parse(jsonString);
        return jsonObject[key] !== undefined ? jsonObject[key] : null;
    } catch (error) {
        console.error("Erreur de parsing JSON :", error);
        return null;
    }
}

function getValue() {
    const jsonString = document.getElementById("jsonInput").value;
    const key = document.getElementById("keyInput").value;
    const result = jsonValueKey(jsonString, key);
    document.getElementById("result").textContent = result !== null ? result : "Clé non trouvée ou JSON invalide";
}