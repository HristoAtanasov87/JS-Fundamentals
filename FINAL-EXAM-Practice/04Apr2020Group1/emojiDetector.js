function solve(input) {
    let [text] = input;

    let matchNums = text.match(/\d/g).map(Number);
    let threshold = 1;
    for (let i of matchNums) {
        threshold *= i;
    }

    console.log(`Cool threshold: ${threshold}`);

    let patternEmoji = /:{2}[A-Z][a-z][a-z]+:{2}|\*{2}[A-Z][a-z][a-z]+\*{2}/g;
    let matchEmoji = text.match(patternEmoji);

    if (matchEmoji !== null) {
        console.log(`${matchEmoji.length} emojis found in the text. The cool ones are:`);

        for (let i of matchEmoji) {
            let coolness = 0;

            for (let j = 2; j < i.length - 2; j++) {
                coolness += i.charCodeAt(j);
            }

            if (coolness > threshold) {
                console.log(`${i}`);
            }

        }

    } else {
        console.log(`0 emojis found in the text. The cool ones are:`);
    }

}


solve([
    'In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**'
])

// solve([
//     '5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::'
// ])

// solve([
//     "It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."
// ])
