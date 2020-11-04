function bunnyKill(inputArray) {
    let coordinates = inputArray.
        pop().
        split(" ");


    let hangarSituation = [];
    hangarSituation = formMatrix(inputArray, hangarSituation);

    let frags = 0;
    let snowballDamage = bombExplosion(coordinates, hangarSituation);
    frags = killLeftBunnies(hangarSituation, frags);

    console.log(snowballDamage);
    console.log(frags);

    function formMatrix(array, emptyMatrix) {

        for (const iterator of array) {
            let rows = iterator.
                split(" ").
                map(Number);
            emptyMatrix.push(rows);
        }

        return emptyMatrix;
    }

    function bombExplosion(bombCoordinates, arrayMatrix) {
        let damageDone = 0

        for (let i = 0; i < bombCoordinates.length; i++) {
            let bomb = bombCoordinates.
                shift().
                split(",").
                map(Number);

            let [x, y] = bomb;

            if (arrayMatrix[x][y] === 0) {  // check if bomb still exists
                i--;
                continue;

            }

            damageDone += arrayMatrix[x][y];    //bomb explodes
            frags++;

            for (let j = x - 1; j <= x + 1; j++) {

                if (j < 0) {
                    j = 0;
                }

                if (j >= arrayMatrix.length) {
                    break;
                }

                for (let k = y - 1; k <= y + 1; k++) {

                    if (k < 0) {
                        k = 0;
                    }

                    if (k >= arrayMatrix[j].length) {
                        break;
                    }

                    if (j == x && k == y) {
                        continue;
                    }

                    arrayMatrix[j][k] -= arrayMatrix[x][y];

                    if (arrayMatrix[j][k] < 0) {
                        arrayMatrix[j][k] = 0;
                    }
                }
            }

            arrayMatrix[x][y] = 0;
            i--;
        }

        return damageDone;
    }

    function killLeftBunnies(arrayMatrix, bunniesToKill) {
        for (let i = 0; i < arrayMatrix.length; i++) {
            for (let j = 0; j < arrayMatrix[i].length; j++) {
                if (arrayMatrix[i][j] != 0) {
                    snowballDamage += arrayMatrix[i][j];
                    bunniesToKill++;
                    arrayMatrix[i][j] = 0;
                }
            }
        }

        return bunniesToKill;
    }

}

bunnyKill([
    '5 10 15 20',
    '10 10 10 10',
    '10 15 10 10',
    '10 10 10 10',
    '2,2 0,1 3,3 3,0']


);