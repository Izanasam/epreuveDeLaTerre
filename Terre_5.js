let input = process.argv.slice(2);

let result = input % 2;

    if (result === 0) {
        console.log('ce nombre est pair !');
    }
    else if (result === 1) {
        console.log('ce nombre est impair !');
    } else {

        console.log("tu ne m'auras pas !");
    }