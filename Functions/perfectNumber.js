function perfectNumber(number) {
    let sum = 0;
    let result = "";

    for (let i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }

    if (sum == number) {
        result = "We have a perfect number!";
    } else {
        result = "It's not so perfect.";
    }

    return result;
}

console.log(perfectNumber(8128));
