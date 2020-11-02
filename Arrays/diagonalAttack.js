function diagonalAttack(input) {
    let giantString = input.join(" ");
    let arrayToOperate = giantString.split(" ");

    let rows = Math.sqrt(arrayToOperate.length);
    let columns = rows;

    let matrix = [];

    for (let i = 0; i < rows; i++) {
        matrix[i] = [];

        for (let j = 0; j < columns; j++) {
            matrix[i][j] = Number(arrayToOperate.shift());
        }
    }

    let row = 0;
    let column = 0;
    let sumFirstDiagonal = 0;
    let sumSecondDiagonal = 0;

    for (let i = 0; i < rows; i++) {
        sumFirstDiagonal += matrix[row][column];
        row++;
        column++;
    }

    row = rows - 1;
    column = 0;

    for (let i = rows; i > 0; i--) {
        sumSecondDiagonal += matrix[row][column];
        row--;
        column++;
    }

    //sravni dvete sumi i ako sa ednakvi prodyljavai sys zada4ata, ako ne sa ednakvi printirash matricata.

    if (sumFirstDiagonal === sumSecondDiagonal) {
        row = 0;
        column = 0;
        for (let i = row; i < rows; i++) {
            for (let j = column; j < columns; j++) {
                if ((row === column) || (row + column == rows - 1)) {
                    column++
                    continue;
                }
                matrix[row][column] = sumFirstDiagonal;
                column++
            }
            column = 0;
            row++;
        }

        for (let i = 0; i < rows; i++) {
            console.log(matrix[i].join(" "));
        }
    } else {
        for (let i = 0; i < rows; i++) {
            console.log(matrix[i].join(" "));
        }
    }
}


diagonalAttack(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']

);