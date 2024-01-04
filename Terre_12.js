var heure = process.argv[2];


var heure1 = heure[0] + heure[1];
var minutes = heure[3] + heure[4];

function horlogeEurope() {
    //MATIN

if (heure[0] === 0 && heure[1] === 0) {

    console.log(heure + "AM")
}

if (heure[0] <= 1 && heure1 <= 11 ) {

    console.log(heure + "AM");
}
//APRES MIDI

if (heure1 == 12) {

    console.log(heure1 + ":" + minutes + "PM")
}

if (heure1 <= 23 && heure1 >=13) {

    heure1 -= 12;

    console.log(heure1 + ":" + minutes + "PM");
}
}

horlogeEurope();