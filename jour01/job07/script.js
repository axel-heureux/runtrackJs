function jourTravaille (date) { 
    const jourFeries2024 = [
        "2024-01-01", "2024-04-01", "2024-05-01", "2024-05-08", "2024-05-09",
        "2024-05-20", "2024-07-14", "2024-08-15", "2024-11-01", "2024-11-11", "2024-12-25"
    ];

    const dateStr = date.toISOString().split('T')[0];
    const jour = date.getDate();
    const mois = date.getMonth();
    const annee = date.getFullYear();

    if (jourFeries2024.includes(dateStr)) {
        console.log(`Le ${jour}/${mois}/${annee} est un jour férié.`);
        } else if (date.getDay() === 0 || date.getDay() === 6) {
            console.log(`Non ${jour}/${mois}/${annee} est un weekend`);
        } else {
            console.log(`Oui, ${jour}/${mois}/${annee} est un jour travaillé.`);
    }
}

jourTravaille(new Date("2024-05-01")); // Jour férié
jourTravaille(new Date("2024-06-03")); // Jour travaillé
jourTravaille(new Date("2024-07-14")); // Jour férié
jourTravaille(new Date("2024-10-12")); // Week-end