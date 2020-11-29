function solve(input) {
    let firstPattern = /([#][A-Z]+[#])|([\$][A-Z]+[\$])|([%][A-Z]+[%])|([&][A-Z]+[&])|([\*][A-Z]+[\*])/g;
    let secondPattern = /\d\d:\d\d/g;

    let [text] = input;
    let [firstPart, secondPart, thirdPart] = text.split("|");

    let firstMatch = firstPart.match(firstPattern);
    let secondMatchArray = secondPart.match(secondPattern);
    let thirdMatchArray = thirdPart.split(" ");

    let found = {};

    for (let i = 0; i < firstMatch.length; i++) {
        let letters = firstMatch[i];
        for (let j of letters) {

            if (j != "#" && j != "$" && j != "%" && j != "&") {
                found[j] = 0;
            }
        }
    }

    for (let i of secondMatchArray) {
        let [asciiCode, wordLength] = i.split(":").map(Number);

        if (found.hasOwnProperty((String.fromCharCode(asciiCode)))) {
            found[String.fromCharCode(asciiCode)] = wordLength + 1;
        }
    }

    for (let letter in found) {
        for (let word of thirdMatchArray) {
            if (letter === word[0] && found[letter] === word.length) {
                console.log(word);
            }
        }
    }
}


solve([
    'sdsGGasAOTPWEEEdas$AOTP$|a65:1.2s65:03d79:01ds84:02! -80:07++ABs90:1.1|adsaArmyd Gara So La Arm Armyw21 Argo O daOfa Or Ti Sar saTheww The Parahaos'
]);

// solve([
//     'Urgent"Message.TO$#POAML#|readData79:05:79:0!2reme80:03--23:11{79:05}tak{65:11ar}!77:!23--)77:05ACCSS76:05ad|Remedy Por Ostream :Istream Post sOffices Office Of Ankh-Morpork MR.LIPWIG Mister Lipwig'
// ]);

