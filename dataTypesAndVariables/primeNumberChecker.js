function solve(input) {
    let number = input;

    if (number === 2 || number === 3) {
        return true;
    }

    if (number % 2 === 0) {
        return false;
    } else if (number % 3 === 0) {
        return false;
    } else {
        return true;
    }
}

console.log(solve(7));