function solve(input) {
    let command = input.shift();
    let guestList = {};
    let countUnliked = 0;

    let actions = {
        Like: (guestList, guest, meal) => {
            if (!guestList.hasOwnProperty(guest)) {

                guestList[guest] = [];
            }

            if (!guestList[guest].includes(meal)) {

                guestList[guest].push(meal);
            }
        },
        Unlike: (guestList, guest, meal) => {
            let mealsArray = guestList[guest];

            if (!guestList.hasOwnProperty(guest)) {
                console.log(`${guest} is not at the party.`);

            } else {

                if (!mealsArray.includes(meal)) {
                    console.log(`${guest} doesn't have the ${meal} in his/her collection.`);
                } else {
                    let index = mealsArray.indexOf(meal);
                    mealsArray = mealsArray.splice(index, 1);
                    countUnliked++;
                    console.log(`${guest} doesn't like the ${meal}.`);
                }
            }
        }
    }

    while (command !== "Stop") {
        let [actionName, guest, meal] = command.split("-");
        let action = actions[actionName];
        action(guestList, guest, meal);

        command = input.shift();
    }

    let toSort = Object.entries(guestList).sort(sortGuests);

    for (let [guestName, mealsArray] of toSort) {
        console.log(`${guestName}: ${mealsArray.join(", ")}`);
    }

    console.log(`Unliked meals: ${countUnliked}`);

    function sortGuests(a, b) {
        let [guestNameA, mealsArrayA] = a;
        let [guestNameB, mealsArrayB] = b;

        return mealsArrayB.length - mealsArrayA.length || guestNameA.localeCompare(guestNameB);
    }
}

// solve([
//     'Like-Krisi-shrimps',
//     'Like-Krisi-soup',
//     'Like-Misho-salad',
//     'Like-Penelope-dessert',
//     'Stop'
// ]);

// solve([
//     'Like-Krisi-shrimps',
//     'Unlike-Vili-carp',
//     'Unlike-Krisi-salad',
//     'Unlike-Krisi-shrimps',
//     'Stop'
// ]);

solve([
    'Like-Mike-frenchFries',
    'Like-Mike-salad',
    'Like-George-fruit',
    'Like-George-fruit1',
    'Like-George-fruit2',
    'Like-Steven-salad',
    'Unlike-Steven-salad',
    'Unlike-Steven-fruit',
    'Stop'
]);