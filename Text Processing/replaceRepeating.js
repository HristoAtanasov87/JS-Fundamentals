function solve(string) {
    let toPrint = [];

    for (let i = 0; i < string.length; i++) {
        if (string[i] !== string[i + 1]) {
            toPrint.push(string[i])
        }
    }

    console.log(toPrint.join(""));
}

solve('aaaaabbbbbcdddeeeedssaa');
solve('qqqwerqwecccwd');