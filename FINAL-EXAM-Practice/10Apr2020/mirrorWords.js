function solve(input) {
    let [text] = input;


    let pattern = /([@|#])(?<firstWord>[A-Za-z]{3,})\1\1(?<secondWord>[A-Za-z]{3,})\1/g;
    let validPairs = [];
    let firstWords = [];
    let secondWords = [];
    let match = pattern.exec(text);

    while (match != null) {
        validPairs.push(match[0]);
        firstWords.push(match.groups.firstWord);
        secondWords.push(match.groups.secondWord);
        match = pattern.exec(text);
    }

    if (validPairs.length != 0) {
        console.log(`${validPairs.length} word pairs found!`);
    } else {
        console.log("No word pairs found!");
    }

    let mirrorWords = [];

    for (let i = 0; i < secondWords.length; i++) {
        let toCompare = "";
        for (let j = secondWords[i].length - 1; j >= 0; j--) {
            toCompare += secondWords[i][j];
        }
        if (toCompare === firstWords[i]) {
            mirrorWords.push(`${firstWords[i]} <=> ${secondWords[i]}`);
        }
    }

    if (mirrorWords.length != 0) {

        console.log(`The mirror words are:\n${mirrorWords.join(", ")}`);
    } else {
        console.log("No mirror words!");
    }

}

// solve([
//     '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
// ]);

// solve(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@'])

solve(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#'])