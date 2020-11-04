function rosettaStone(input) {
    let toManipulate = input.slice();
    let lengthTemplate = Number(toManipulate.shift());
    let toManipulateTemplate = toManipulate.slice(0, lengthTemplate);
    let toManipulateDecode = toManipulate.slice(lengthTemplate);

    //parse-vam matricata za dekodirane w chisla
    let toDecode = [];

    let rowLength = 0;
    let rows = 0;

    for (let i of toManipulateDecode) {
        let row = i.split(" ").map(Number);
        rowLength = row.length;
        toDecode.push(row);
        rows++;
    }

    //pravq template-a kolkoto e matricata

    let template = [];
    for (let i = 0; i < lengthTemplate; i++) {

        let rowTemplate = toManipulateTemplate[i].split(" ").map(Number);

        if (rowTemplate.length == rowLength) {
            template.push(rowTemplate);
        } else if (rowTemplate.length > rowLength) {
            rowTemplate = rowTemplate.slice(0, rowLength);
            template.push(rowTemplate);
        } else {
            for (let j = 0; j < rowTemplate.length; j++) {

                for (let k = 0; k < rowTemplate.length - k; k++) {
                    rowTemplate.push(rowTemplate[k]);

                    if (rowTemplate.length == rowLength) {
                        break;
                    }
                }
                if (rowTemplate.length == rowLength) {
                    break;
                }
            }

            template.push(rowTemplate);
        }
    }


    // naslagvam template-a vyrhu matricata

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < lengthTemplate; j++) {
            for (let k = 0; k < rowLength; k++) {
                toDecode[i][k] += template[j][k];
            }
            i++;
            if (i > rows - 1) {
                break;
            }
        }
        i--;
    }

    // deshifriram koda
    let numToDecode = 0;
    let toPrint = [];

    for (let i = 0; i < toDecode.length; i++) {

        for (let j = 0; j < toDecode[i].length; j++) {
            numToDecode = toDecode[i][j];

            if (numToDecode > 26) {
                let limit = Math.floor(numToDecode / 27);

                for (let k = 0; k < limit; k++) {
                    numToDecode -= 27;
                }
            }

            switch (numToDecode) {
                case 0:
                    numToDecode = " ";
                    break;
                case 1:
                    numToDecode = "A";
                    break;
                case 2:
                    numToDecode = "B";
                    break;
                case 3:
                    numToDecode = "C";
                    break;
                case 4:
                    numToDecode = "D";
                    break;
                case 5:
                    numToDecode = "E";
                    break;
                case 6:
                    numToDecode = "F";
                    break;
                case 7:
                    numToDecode = "G";
                    break;
                case 8:
                    numToDecode = "H";
                    break;
                case 9:
                    numToDecode = "I";
                    break;
                case 10:
                    numToDecode = "J";
                    break;
                case 11:
                    numToDecode = "K";
                    break;
                case 12:
                    numToDecode = "L";
                    break;
                case 13:
                    numToDecode = "M";
                    break;
                case 14:
                    numToDecode = "N";
                    break;
                case 15:
                    numToDecode = "O";
                    break;
                case 16:
                    numToDecode = "P";
                    break;
                case 17:
                    numToDecode = "Q";
                    break;
                case 18:
                    numToDecode = "R";
                    break;
                case 19:
                    numToDecode = "S";
                    break;
                case 20:
                    numToDecode = "T";
                    break;
                case 21:
                    numToDecode = "U";
                    break;
                case 22:
                    numToDecode = "V";
                    break;
                case 23:
                    numToDecode = "W";
                    break;
                case 24:
                    numToDecode = "X";
                    break;
                case 25:
                    numToDecode = "Y";
                    break;
                case 26:
                    numToDecode = "Z";
                    break;
            }

            toPrint.push(numToDecode);
        }
    }

    let result = toPrint.join("");
    console.log(result);

}

// rosettaStone(['2',
//     '59 36',
//     '82 52',
//     '4 18 25 19 8',
//     '4 2 8 2 18',
//     '23 14 22 0 22',
//     '2 17 13 19 20',
//     '0 9 0 22 22']


// )

rosettaStone(['1',
    '1 3 13',
    '12 22 14 13 25 0 4 24 23',
    '18 24 2 25 22 0 0 11 18',
    '8 25 6 26 8 23 13 4 14',
    '14 3 14 10 6 1 6 16 14',
    "11 12 2 10 24 2 13 24 0",
    '24 24 10 14 15 25 18 24 12',
    '4 24 0 8 4 22 19 22 14',
    "0 11 18 26 1 19 18 13 15",
    "8 15 14 26 24 14 26 24 14"
]

);



