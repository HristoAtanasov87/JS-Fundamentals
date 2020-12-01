function solve(string, word) {
    let censored = string.replace(word, "*".repeat(word.length));
    while (censored.includes(word)) {
        censored = censored.replace(word, "*".repeat(word.length))
    }

    console.log(censored);
}

solve("A small sentence with small small some words", "small");