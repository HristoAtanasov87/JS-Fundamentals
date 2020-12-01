function solve(input) {
    let string = input.shift();
    let command = input.shift();
    let sum = 0;

    if (command === "LOWERCASE") {
        for (let i = 0; i < string.length; i++) {
            if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
                sum += string.charCodeAt(i);
            }
        }
    } else {
        for (let i = 0; i < string.length; i++) {
            if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
                sum += string.charCodeAt(i);
            }
        }
    }

    console.log(`The total sum is: ${sum}`);
}

solve(['HelloFromMyAwesomePROGRAM', 'LOWERCASE', ''])
solve("AC / DC", "UPPERCASE")