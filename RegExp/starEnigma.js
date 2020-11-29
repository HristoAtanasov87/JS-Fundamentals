function solve(input) {
    let messages = Number(input.shift());
    let attacked = [];
    let destroyed = [];

    for (let i = 0; i < messages; i++) {
        let character = input[i];
        let key = 0;
        for (let j = 0; j < character.length; j++) {
            if (character[j].toLowerCase() == "s" || character[j].toLowerCase() == "t" || character[j].toLowerCase() == "a" || character[j].toLowerCase() == "r") {
                key++;
            }
        }

        let decrypted = "";
        for (let k = 0; k < character.length; k++) {
            let ascii = String.fromCharCode(character.charCodeAt(k) - key);
            decrypted += ascii;
        }

        let pattern = /@(?<planet>[A-Za-z]+)([^@\-!:\>]+)?:(?<population>\d+)([^@\-!:\>]+)?!(?<attack>[AD])!([^@\-!:\>]+)?\-\>(?<soldiers>\d+)/g;

        let match = pattern.exec(decrypted);

        if (match === null) {
            continue;
        }

        if (match.groups.attack === "A") {
            attacked.push(match.groups.planet);
        } else {
            destroyed.push(match.groups.planet);
        }
    }

    attacked.sort((a, b) => a.localeCompare(b));
    destroyed.sort((a, b) => a.localeCompare(b));

    console.log(`Attacked planets: ${attacked.length}`);
    for (let i of attacked) {
        console.log(`-> ${i}`);
    }
    console.log(`Destroyed planets: ${destroyed.length}`);
    for (let i of destroyed) {
        console.log(`-> ${i}`);
    }
}

solve(['2', 'STCDoghudd4=63333$D$0A53333', 'EHfsytsnhf?8555&I&2C9555SR'])

solve([
    '3',
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR'
])
