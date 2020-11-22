function solve(string) {
    let firstLetter = "";
    let number = "";
    let secondLetter = "";
    let sum = 0;
    let stringArray = [];

    stringArray = string.split(" ");

    for (let i = 0; i < stringArray.length; i++) {
        if (stringArray[i] == "") {
            continue;
        }

        firstLetter = stringArray[i][0];
        secondLetter = stringArray[i][stringArray[i].length - 1];
        number = Number(stringArray[i].substring(1, stringArray[i].length - 1));

        if (firstLetter.charCodeAt(0) >= 65 && firstLetter.charCodeAt(0) <= 90) {
            number = number / (firstLetter.charCodeAt(0) - 64);
        } else if (firstLetter.charCodeAt(0) >= 97 && firstLetter.charCodeAt(0) <= 122) {
            number = number * (firstLetter.charCodeAt(0) - 96);
        }

        if (secondLetter.charCodeAt(0) >= 65 && secondLetter.charCodeAt(0) <= 90) {
            number -= (secondLetter.charCodeAt(0) - 64);
        } else if (secondLetter.charCodeAt(0) >= 97 && secondLetter.charCodeAt(0) <= 122) {
            number += (secondLetter.charCodeAt(0) - 96);
        }

        sum += number;
    }

    console.log(sum.toFixed(2));
}

solve(' P34562Z q2576f   H456z ')