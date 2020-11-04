function equalNeighbours(stringMatrix) {
    let count = 0;

    for (let i = 0; i < stringMatrix.length - 1; i++) {
        for (let j = 0; j < stringMatrix[i].length; j++) {
            let first = stringMatrix[i][j];
            let second = stringMatrix[i + 1][j];

            if (first === second) {
                count++;
            }
        }
    }

    for (let i = 0; i < stringMatrix.length; i++) {
        for (let j = 0; j <= stringMatrix[i].length - 1; j++) {
            let first = stringMatrix[i][j];
            let second = stringMatrix[i][j + 1];

            if (first === second) {
                count++;
            }
        }
    }

    return count;
}

// console.log(equalNeighbours(
//     [['2', '3', '4', '7', '0'],
//     ['4', '0', '5', '3', '4'],
//     ['2', '3', '5', '4', '2'],
//     ['9', '8', '7', '5', '4']]
// ));

// console.log(equalNeighbours([
//     ['test', 'yes', 'yo', 'ho'],
//     ['well', 'done', 'yo', '6'],
//     ['not', 'done', 'yet', '5']]
// ));

console.log(equalNeighbours([
    ['2', '2', '5', '7', '4'],
    ['4', '0', '5', '3', '4'],
    ['2', '5', '5', '4', '2']
]));