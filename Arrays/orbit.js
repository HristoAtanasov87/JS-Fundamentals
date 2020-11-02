function orbit(input) {
    let width = input[0];
    let height = input[1];
    let coordinateX = input[2];
    let coordinateY = input[3];

    let matrix = [];

    for (let i = 0; i < height; i++) {
        matrix[i] = [];
        for (let j = 0; j < width; j++) {
            matrix[i][j] = 0;
        }
    }

    matrix[coordinateX][coordinateY] = 1;

    for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
            if (i == coordinateX && j == coordinateY) {
                continue;
            }
            matrix[i][j] = Math.max(Math.abs(i - coordinateX), Math.abs(j - coordinateY)) + 1;
        }
    }

    for (i of matrix) {
        console.log(i.join(" "));
    }

}

orbit([5, 5, 4, 2])