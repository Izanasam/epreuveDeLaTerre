let nombre = parseInt(process.argv[2]);


try {

    if (nombre <= 0 || isNaN(nombre)) {
        throw new Error;
    }
function racineCarre(nombre) {
    for (var i = 0; i <= nombre; i++) {


if (i * i === nombre) {
    console.log(i);
    return;
}

}
console.log(i);
}

racineCarre(nombre);
}catch(e) {

console.log("Erreur");
}