
    var dividende   = parseInt(process.argv[2]);
    
    var diviseur    = parseInt(process.argv[3]);
    

    
    
function Resultat(dividende, diviseur) {

    if (isNaN(dividende) || isNaN(diviseur) || diviseur === 0 || dividende < diviseur) {
        throw new Error("Erreur : Les entrées ne sont pas valides.");
    }

    resultat = dividende / diviseur;
    resultatEntier = parseInt(resultat);
    

    console.log("le resultat est : " + resultatEntier);
}

function Reste(dividende, diviseur) {

    if (isNaN(dividende) || isNaN(diviseur) || diviseur === 0 ) {
        throw new Error("Erreur : Les entrées ne sont pas valides.");
    }

    console.log("le reste est : " + dividende % diviseur);
}


try {

Resultat(dividende, diviseur);
Reste(dividende, diviseur);
} catch (error) {

    console.error("erreur");
}