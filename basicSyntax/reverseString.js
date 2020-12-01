function solve(input) {
    let word = input.toString();
    let wordToPrint = "";

    for (let i = word.length - 1; i >= 0; i--) {
        wordToPrint += word[i];    
    }
    return wordToPrint;
}

console.log(solve("1234"));