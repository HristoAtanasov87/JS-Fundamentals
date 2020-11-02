function solve(rows, columns) {
    let direction = "right";
    let matrix = [];


    for (let i = 0; i < rows; i++) {
        matrix[i] = [];
        for (let j = 0; j < columns; j++) {
            matrix[i][j] = 0;
        }
    }

    let row = 0;
    let column = 0;

    for (let i = 1; i <= rows * columns; i++) {

        switch (direction) {
            case "right":
                matrix[row][column] = i;
                column++;

                if (column == columns || matrix[row][column] !== 0) {
                    direction = "down";
                    row++;
                    column--;
                }
                break;
            case "down":
                matrix[row][column] = i;
                row++;

                if (row == rows || matrix[row][column] !== 0) {
                    direction = "left";
                    column--;
                    row--;
                }
                break;
            case "left":
                matrix[row][column] = i;
                column--;

                if (column < 0 || matrix[row][column] !== 0) {
                    direction = "up";
                    row--;
                    column++;
                }
                break;
            case "up":
                matrix[row][column] = i;
                row--;

                if (matrix[row][column] !== 0) {
                    direction = "right";
                    column++;
                    row++;
                }
                break;
        }
    }

    for (let i = 0; i < rows; i++) {
        console.log(matrix[i].join(" "));
    }
}


solve(5, 5);