function solve(string, repeatTimes) {
    let initialString = string;
    let timesToRepeat = repeatTimes;
    let result = "";

    for (let i = 1; i <= timesToRepeat; i++) {
        result += initialString;
    }

    return result
}

console.log(solve("abc", 3));