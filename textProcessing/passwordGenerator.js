function solve(input) {
    let firstWord = input.shift().toLowerCase();
    let secondWord = input.shift().toLowerCase();
    let password = firstWord + secondWord;
    let thirdWord = input.shift().toUpperCase().split("");

    for (let i = 0; i < password.length; i++) {
        let ifVowel = password.charCodeAt(i);

        if (ifVowel == 97 || ifVowel == 101 || ifVowel == 105 || ifVowel == 111 || ifVowel == 117) {
            let replacement = thirdWord.shift();
            password = password.replace(password[i], replacement);
            thirdWord.push(replacement)
        }
    }

    password = password.split("").reverse().join("");
    console.log(`Your generated password is ${password}`);
}

solve(
    [
        'easymoneyeazylife', 'atleasttencharacters', 'absolute'
    ]
);