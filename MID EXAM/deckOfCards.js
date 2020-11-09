function deckOfCards(input) {
    let list = input
        .shift()
        .split(", ");

    let numberOfCommands = Number(input.shift());

    for (let i = 0; i < numberOfCommands; i++) {
        let command = input[i].split(", ");
        let [action, index, cardName] = command;

        switch (action) {
            case "Add": {
                let toCheck = list.indexOf(index);

                if (toCheck != -1) {
                    console.log("Card is already bought");
                } else {
                    console.log("Card successfully bought");
                    list.push(index);
                }
                break;
            }
            case "Remove": {
                let toCheck = list.indexOf(index);

                if (toCheck != -1) {
                    console.log("Card successfully sold");
                    list.splice(toCheck, 1);
                } else {
                    console.log("Card not found");
                }
                break;
            }
            case "Remove At": {
                index = Number(index);

                if (index >= 0 && index < list.length) {
                    list.splice(index, 1);
                    console.log(`Card successfully sold`);
                } else {
                    console.log("Index out of range");
                }
                break;
            }
            case "Insert": {
                index = Number(index);
                let toCheck = list.indexOf(cardName);

                if (index >= 0 && index < list.length) {

                    if (toCheck != -1) {
                        console.log(`Card is already bought`);
                    } else {
                        console.log(`Card successfully bought`);
                        list.splice(index, 0, cardName);
                    }

                } else {
                    console.log(`Index out of range`);
                }
                break;
            }
        }
    }

    console.log(list.join(", "));
}

// deckOfCards(
//     ["T-34-85 Rudy, SU-100Y, STG",
//         "3",
//         "Add, King Tiger(C)",
//         "Insert, 2, IS-2M",
//         "Remove, T-34-85 Rudy"]
// );

deckOfCards(["T 34, T 34 B, T92, AMX 13 57",
    "4",
    "Add, T 34",
    "Remove, AMX CDC",
    "Insert, 10, M60",
    "Remove At, 1"])
