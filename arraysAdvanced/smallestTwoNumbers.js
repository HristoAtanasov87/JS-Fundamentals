function smallestTwoNumbers(inputArray) {
    inputArray.sort((a, b) => a - b);
    let smallest = inputArray.slice(0, 2);

    return smallest.join(" ")
}

console.log(smallestTwoNumbers([30, 15, 50, 5]));