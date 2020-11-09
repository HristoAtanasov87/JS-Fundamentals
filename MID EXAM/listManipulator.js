function manipulator(input) {
    let list = input
        .shift()
        .split(", ");

    let command = input.shift();
    let countBlacklisted = 0;
    let countLost = 0;


    while (command != "Report") {
        command = command.split(" ");
        let [action, index, name] = command;

        switch (action) {
            case "Blacklist": {
                let toCheck = list.indexOf(index);

                if (toCheck != -1) {
                    list.splice(toCheck, 1, "Blacklisted")
                    console.log(`${index} was blacklisted.`);
                    countBlacklisted++;
                } else {
                    console.log(`${index} was not found.`);
                }
                break;
            }
            case "Error": {
                index = Number(index);

                if (list[index] != "Blacklisted" && list[index] != "Lost") {
                    let temp = list.splice(index, 1, "Lost");
                    countLost++;
                    console.log(`${temp} was lost due to an error.`);
                }
                break;
            }
            case "Change": {
                index = Number(index);

                if (index >= 0 && index < list.length) {
                    let temp = list.splice(index, 1, name);
                    console.log(`${temp} changed his username to ${name}.`);
                }
            }
        }

        command = input.shift();
    }

    console.log(`Blacklisted names: ${countBlacklisted}`);
    console.log(`Lost names: ${countLost}`);
    console.log(list.join(" "));


}

// manipulator(
//     ["Mike, John, Eddie",
//         "Blacklist Mike",
//         "Error 0",
//         "Error 1",
//         "Change 2 Mike123",
//         "Report"]
// );

manipulator(["Mike, John, Eddie, William",
    "Error 3",
    "Error 3",
    "Change 0 Mike123",
    "Blacklist Eddie",
    "Report"]);
