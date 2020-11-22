function solve(input) {
    let firstChar = input.shift().charCodeAt(0);
    let secondChar = input.shift().charCodeAt(0);
    let sum = 0;

    let string = input.shift();

    for (let i = 0; i < string.length; i++) {
        let toCheck = string.charCodeAt(i);

        if (toCheck > Math.min(firstChar, secondChar) && toCheck < Math.max(firstChar, secondChar)) {
            sum += toCheck;
        }
    }

    console.log(sum);
}

solve(['.', '@', 'dsg12gr5653feee5']);
solve(['?', 'E', '@ABCEF'])
solve(['a', '1', 'jfe392$#@j24ui9ne#@$']);