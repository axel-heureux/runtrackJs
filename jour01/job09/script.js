function tri(nombres, ordre) {
    if (ordre === "asc") {
        return nombres.sort((a, b) => a - b);
    } else if (ordre === "desc") {
        return nombres.sort((a, b) => b - a);
    } else {
        return "L'ordre spécifié est incorrect. Utilisez 'asc' ou 'desc'."; 
    }
}

let tableauAsc = tri([5,3,1,2,8], "asc");
console.log(tableauAsc);

let tableauDesc = tri([5,3,1,2,8], "desc");
console.log(tableauDesc);