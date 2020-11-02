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

    let row = 0;
    let column = 0;

}

orbit([5, 5, 2, 2])