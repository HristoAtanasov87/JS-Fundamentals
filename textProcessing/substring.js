function solve(string, startIndex, numOfChars) {
    let result = "";
    result = string.substring(startIndex, numOfChars + startIndex);

    console.log(result);
}

solve("ASentance", 1, 8);