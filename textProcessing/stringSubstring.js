function solve(word, sentence) {
    let toCheckWord = word.toLowerCase();
    let toCheckSentence = sentence.toLowerCase();

    let arr = toCheckSentence.split(" ");
    let isFound = false;

    for (let i of arr) {
        if (i === toCheckWord) {
            isFound = true;
        }
    }

    if (isFound) {
        console.log(`${word}`);
    } else {
        console.log(`${word} not found!`);
    }
}

solve('javascript',
    'JavaScript is the best programming language'
);
solve('python',
    'JavaScript is the best programming language'
);