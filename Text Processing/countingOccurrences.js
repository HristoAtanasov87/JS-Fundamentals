function solve(string, word) {
    let count = 0;

    let arr = string.split(" ");
    for (const iterator of arr) {
        if (iterator === word) {
            count++;
        }
    }

    console.log(count);
}

solve("This is a word and it also is a sentence",
    "is"
)