function sorting(inputArray) {
    let increasing = inputArray.slice();
    let decreasing = inputArray.slice();

    increasing.sort((a, b) => a - b);
    decreasing.sort((a, b) => b - a);

    let result = [];

    for (let i = 0; i < inputArray.length; i += 2) {
        result[i] = decreasing.shift();
        result[i + 1] = increasing.shift();
    }

    if (inputArray.length % 2 !== 0) {
        result.pop();
    }

    console.log(result.join(" "));
}

// console.log(sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]));

sorting([
    1, 3, 52, 69,
    63, 31, 2, 18, 94
]);