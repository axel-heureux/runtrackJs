const updateButton = document.getElementById("updateButton");
const userTable = document.getElementById("userTable").getElementsByTagName("tbody")[0];

updateButton.addEventListener('click', fetchUsers);

function fetchUsers () {
    fetch("utilisateurs.json")
    .then(reponse => reponse.json())
    .then(users => {
        updateTable(users);
    })
    .catch(error => console.error("Erreur de chargement des utilisateurs:", error));
    
}

function updateTable(users) {
    userTable.innerHTML = "";

    users.forEach(user => {
        const row = userTable.insertRow();
        row.innerHTML = `
        <td>${user.id}</td>
        <td>${user.nom}</td>
        <td>${user.prenom}</td>
        <td>${user.email}</td>
        `;
    });

}