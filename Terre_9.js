var base = process.argv[2];

var exposant = process.argv[3];

try {

    if (isNaN(base,exposant)) {
        throw new Error;
    }

function puissance(base, exposant) {
let resultat = 1;
    for (var i = 0; i < exposant; i++) {
     resultat *= base;

     

    }
console.log(resultat);
}

puissance(base, exposant);
}
catch (e) {

    console.log("Erreur");
}