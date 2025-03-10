function estPremier(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function sommeNombresPremiers (a,b) {
    if (estPremier(a) && estPremier(b)) {
        return a + b;
        } else {
            return false;
    }
}

let resultat = sommeNombresPremiers(5, 7);
console.log(resultat);