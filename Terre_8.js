var mot = ["merci" ,"aurevoire"];


var mot1 = mot.split("");




console.log(mot1);



try {
function longueurDeChaine(mot) {

    if (!isNaN(mot)){

        throw new Error;

    }
    
    var compteur = 0;

    while (mot1[compteur] !== undefined) {
        compteur++;
    }
    console.log(compteur);
}

longueurDeChaine(mot);
} catch (e) {

    console.log("Erreur");
}