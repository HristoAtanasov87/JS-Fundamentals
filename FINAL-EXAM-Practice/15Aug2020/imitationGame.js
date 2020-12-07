function solve(input) {
    let text = input.shift();
    let [action, ...parameters] = input.shift().split("|");

    while (action != "Decode") {
        if (action === "Move") {

            let [lettersCount] = parameters.map(Number);
            let toMove = text.substring(0, lettersCount);
            text = text.substring(lettersCount) + toMove;

        } else if (action === "Insert") {
            let [index, value] = parameters;
            index = Number(index);
            text = text.substring(0, index) + value + text.substring(index);

        } else if (action === "ChangeAll") {

            let [substring, replacement] = parameters;
            while (text.includes(substring)) {
                text = text.replace(substring, replacement);
            }
        }
        [action, ...parameters] = input.shift().split("|")

    }
    console.log(`The decrypted message is: ${text}`);
}

solve([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
]);

solve([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
]);