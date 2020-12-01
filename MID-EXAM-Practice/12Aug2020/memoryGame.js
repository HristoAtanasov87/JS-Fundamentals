function memoryGame(inputArray) {
    let board = inputArray
        .shift()
        .split(" ");

    let index = 0;
    let command = inputArray[index];
    let moves = 0;

    while (command != "end") {
        if (board.length == 0) {
            break;
        }

        moves++;
        command = command
            .split(" ")
            .map(Number);

        let [indexOne, indexTwo] = command;

        if (indexOne < 0 || indexTwo < 0 || (indexOne == indexTwo) || (indexOne > board.length - 1) || (indexTwo > board.length - 1)) {
            console.log("Invalid input! Adding additional elements to the board");
            board.splice((board.length / 2), 0, (`-${moves}a`));
            board.splice((board.length / 2), 0, (`-${moves}a`));
            index++;
            command = inputArray[index];
            continue;
        }

        if (board[indexOne] === board[indexTwo]) {
            console.log(`Congrats! You have found matching elements - ${board[indexOne]}!`);

            if (indexOne > indexTwo) {
                board.splice(indexOne, 1);
                board.splice(indexTwo, 1);

            } else {
                board.splice(indexTwo, 1);
                board.splice(indexOne, 1);
            }

            index++;
            command = inputArray[index];
            continue;

        } else if (board[indexOne] !== board[indexTwo]) {
            console.log("Try again!");
            index++;
            command = inputArray[index];
            continue;
        }


    }

    if (board.length != 0) {
        console.log("Sorry you lose :(");
        console.log(board.join(" "));
    } else {
        console.log(`You have won in ${moves} turns!`);
    }
}

memoryGame([
    "1 1",
    "0 7",
    "0 1",
    "end"
]


);