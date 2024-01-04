var phrase = process.argv.slice(2).toString();
var phraseInverse = "";

for (var i = phrase.length - 1; i >= 0 ; i--) {

    phraseInverse += phrase[i];
    
}

console.log(phraseInverse);