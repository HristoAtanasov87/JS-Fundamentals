function solve(words, string) {
    let arr = string.split(" ");
    let arrWords = words.split(", ")

    for (let i of arrWords) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j].includes("*") && (arr[j].length === i.length)) {
                arr[j] = i;
            }
        }
    }

    console.log(arr.join(" "));
}

solve('great',
    'softuni is ***** place for learning new programming languages'
);

solve('great, learning',
    'softuni is ***** place for ******** new programming languages'
);