try {
    var entier1 = parseInt(process.argv[2]);
    var entier2 = parseInt(process.argv[3]);
    var entier3 = parseInt(process.argv[4]);
  if (entier1 === entier2 || entier3 === entier2 || entier3 === entier1){

    throw new Error;
  }
    if (!isNaN(entier1) && !isNaN(entier2) && !isNaN(entier3)) {
      var valeurMilieu;
  
      if (entier1 < entier2 && entier2 < entier3) {
        valeurMilieu = entier2;
      } else if (entier3 < entier2 && entier2 < entier1) {
        valeurMilieu = entier2;
      } else if (entier1 < entier3 && entier3 < entier2) {
        valeurMilieu = entier3;
      } else if (entier2 < entier3 && entier3 < entier1) {
        valeurMilieu = entier3;
      } else {
        valeurMilieu = entier1;
      }
  
      console.log(valeurMilieu);
    } else {
      console.log("Veuillez entrer des entiers valides en tant que paramètres.");
    }
  
} catch (e) {
    console.log("Erreur")}