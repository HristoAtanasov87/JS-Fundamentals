function archeryTournament(input) {
    let field = input
        .shift()
        .split("|")
        .map(Number);

    let command = input.shift();
    let points = 0;

    while (command != "Game over") {
        if (command == "Reverse") {
            field.reverse();
        } else {
            command = command.split("@");
            let [position, startIndex, length] = command;
            startIndex = Number(startIndex);
            length = Number(length);

            if (position == "Shoot Left") {
                if (startIndex >= 0 && startIndex < field.length) {

                    startIndex -= length;

                    if (startIndex < 0) {
                        while (startIndex < 0) {
                            startIndex += field.length;
                        }
                    }

                    if (field[startIndex] >= 5) {
                        points += 5;
                        field[startIndex] -= 5;
                    } else {
                        points += field[startIndex];
                        field[startIndex] = 0;
                    }
                };
            }

            if (position == "Shoot Right") {
                if (startIndex >= 0 && startIndex < field.length) {

                    startIndex += length;

                    if (startIndex > field.length) {
                        while (startIndex > field.length) {
                            startIndex -= field.length;
                        }
                    }

                    if (field[startIndex] >= 5) {
                        points += 5;
                        field[startIndex] -= 5;
                    } else {
                        points += field[startIndex];
                        field[startIndex] = 0;
                    }
                };
            }
        }

        command = input.shift();
    }

    console.log(field.join(" - "));
    console.log(`Iskren finished the archery tournament with ${points} points!`);
}

archeryTournament([
    '10|10|10|10|10',
    'Shoot Left@0@2',
    'Shoot Right@4@5',
    'Shoot Right@6@5',
    'Reverse',
    'Game over',
    ''
]);

archeryTournament([
    '20|30|40|50|60',
    'Shoot Left@0@12',
    'Shoot Right@4@15',
    'Shoot Left@6@5',
    'Reverse',
    'Game over',
    ''
]);