function bisextile(annee) {
    if (annee % 4 === 0 && annee % 100 !== 0 || (annee % 400 === 0)) {
        return true
        } else {
            return false
    }
}

console.log(bisextile(2024));
console.log(bisextile(2023));
console.log(bisextile(1800));
console.log(bisextile(1500));