function solve(firstString, character, secondString) {
    let check = firstString.replace("_",character);
    if (check === secondString) {
        return "Matched";
    } else {
        return "Not Matched";
    }
}

console.log(solve('Str_ng', 'I', 'Strong'))