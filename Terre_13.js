var heure = process.argv[2];

var heure1 = heure[0] + heure[1];
var minutes = heure[3] + heure[4];


function horlogeAnglaise(heure) { 

if (heure[5] === "A") {
    nouvelleHeure = heure.slice(0, -2);

    console.log(nouvelleHeure);
}
if (heure1 <= 12 && heure[5] === "P"){  
    
    nouvelleHeure = (heure[0] + heure[1]) - 12 + 24;

    console.log(nouvelleHeure + ':'+ minutes); 
}

}



horlogeAnglaise(heure);