function game(input) {
    let adventure = Number(input.shift());
    let players = Number(input.shift());
    let energy = Number(input.shift());
    let waterPerDay = Number(input.shift());
    let foodPerDay = Number(input.shift());

    let waterNeeded = adventure * waterPerDay * players;
    let foodNeeded = adventure * foodPerDay * players;

    let days = 0;
    let index = 0;
    let dailyLossOfEnergy = Number(input[index]);

    while (index < adventure) {
        energy -= dailyLossOfEnergy;
        days++;

        if (energy < 0) {
            break;
        }

        if (days % 2 == 0) {
            energy = energy * 1.05;
            waterNeeded = waterNeeded * 0.7;
        }

        if (days % 3 == 0) {
            foodNeeded -= foodNeeded / players;
            energy = energy * 1.1;
        }


        index++;
        dailyLossOfEnergy = Number(input[index]);

    }

    if (energy > 0) {
        console.log(`You are ready for the quest. You will be left with - ${energy.toFixed(2)} energy!`);
    } else {
        console.log(`You will run out of energy. You will be left with ${foodNeeded.toFixed(2)} food and ${waterNeeded.toFixed(2)} water.`);
    }
}

game([
    '10', // days of adventure
    '7', // count of players
    '5035.5', // group's energy
    '11.3', // water per day for one person
    '7.2', // food per day for one person

    //energy loss
    '942.3',
    '500.57', '520.68', '540.87',
    '505.99', '630.3', '784.20',
    '321.21', '456.8', '330'
]);

game([
    '12', '6', '4430',
    '9.8', '5.5', '620.3',
    '840.2', '960.1', '220',
    '340', '674', '365',
    '345.5', '212', '412.12',
    '258', '496'
]);