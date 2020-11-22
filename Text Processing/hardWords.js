function solve(input) {
    let text = input.shift();
    let arrayWords = input.shift();
    let indexes = [];
    let newText = "";

    for (let i = 0; i < text.length; i++) {
        if (text[i] === "_") {
            indexes.push(i);
        }
    }

    let words = [];
    let count = 1;
    for (let i = 0; i < indexes.length; i++) {
        if (indexes[i + 1] === indexes[i] + 1) {
            count++;
        } else {
            words.push(count);
            count = 1;
        }
    }

    for (let i = 0; i < text.length; i++) {
        if (text[i] === "_") {
            let keyWordLength = words.shift();
            for (let j = 0; j < arrayWords.length; j++) {
                if (arrayWords[j].length === keyWordLength) {
                    newText += arrayWords[j];
                    i += arrayWords[j].length - 1;
                    break;
                }
            }

        } else {
            newText += text[i];
        }
    }

    console.log(newText);
}

solve(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
)