function searchingNumber(initialArray, threeNums) {
    let firstOperation = initialArray.slice(0, threeNums[0]);
    let secondOperation = firstOperation.splice(0, threeNums[1]);

    let thirdOperation = firstOperation.filter(x => x == threeNums[2]);

    return `Number ${threeNums[2]} occurs ${thirdOperation.length} times.`
}

console.log(searchingNumber([5, 2, 3, 3, 3, 4, 1, 6],
    [7, 2, 3]
));