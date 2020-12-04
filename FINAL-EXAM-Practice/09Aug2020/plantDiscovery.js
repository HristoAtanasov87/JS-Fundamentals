function solve(input) {
    let plantsCount = Number(input.shift());
    let plantsCollection = {};

    for (let i = 1; i <= plantsCount; i++) {
        let [plant, rarity] = input.shift().split("<->");
        rarity = Number(rarity);

        if (!plantsCollection.hasOwnProperty(plant)) {
            plantsCollection[plant] = {
                rarity: 0,
                average: 0,
                rating: []
            };
        }

        plantsCollection[plant].rarity = rarity;
    }

    let actions = {
        Rate: (plantsCollection, plant) => {
            let [plantName, rating] = plant.split(" - ");
            rating = Number(rating);

            if (plantsCollection.hasOwnProperty([plantName])) {
                plantsCollection[plantName].rating.push(rating);
            } else {
                console.log("error");
            }
        },
        Update: (plantsCollection, plant) => {
            let [plantName, newRarity] = plant.split(" - ");
            newRarity = Number(newRarity);

            if (plantsCollection.hasOwnProperty([plantName])) {
                plantsCollection[plantName].rarity = newRarity;
            } else {
                console.log("error");
            }

        },
        Reset: (plantsCollection, plant) => {
            if (plantsCollection.hasOwnProperty([plant])) {
                plantsCollection[plant].rating.length = 0;
            } else {
                console.log("error");
            }
        }
    }

    let command = input.shift();
    while (command != "Exhibition") {
        let [actionName, plant] = command.split(": ");
        let action = actions[actionName];
        action(plantsCollection, plant)

        command = input.shift();
    }


    for (let plantName in plantsCollection) {
        let avgRating = 0;
        for (let j of plantsCollection[plantName].rating) {
            avgRating += j;
        }
        avgRating /= plantsCollection[plantName].rating.length;
        if (!isNaN(avgRating)) {
            plantsCollection[plantName].average = avgRating;
        }
    }

    let toSort = Object.entries(plantsCollection).sort(sortPlants);

    function sortPlants(a, b) {
        let [plantNameA, valuesA] = a;
        let [plantNameB, valuesB] = b;

        return valuesB.rarity - valuesA.rarity || valuesB.average - valuesA.average;
    }

    console.log(`Plants for the exhibition:`);
    for (let [plantName, values] of toSort) {
        console.log(`- ${plantName}; Rarity: ${values.rarity}; Rating: ${(values.average).toFixed(2)}`);
    }
}

// solve([
//     '3',
//     'Arnoldii<->4',
//     'Woodii<->7',
//     'Welwitschia<->2',
//     'Rate: Woodii - 10',
//     'Rate: Welwitschia - 7',
//     'Rate: Arnoldii - 3',
//     'Rate: Woodii - 5',
//     'Update: Woodii - 5',
//     'Reset: Arnoldii',
//     'Exhibition'
// ])

solve([
    '2',
    'Candelabra<->10',
    'Oahu<->10',
    'Rate: Oahu - 7',
    'Rate: Candelabra - 6',
    'Exhibition'
])