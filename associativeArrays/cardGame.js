function cardGame(input) {
    let cardPower = {
        A: 14,
        K: 13,
        Q: 12,
        J: 11
    }

    let cardType = {
        S: 4,
        H: 3,
        D: 2,
        C: 1
    }

    let playersHands = {};

    for (let i of input) {
        let [name, hand] = i.split(": ");

        if (!playersHands.hasOwnProperty(name)) {
            playersHands[name] = [];
        }

        hand = hand.split(", ");

        for (let j of hand) {
            if (!playersHands[name].includes(j)) {
                playersHands[name].push(j);
            }
        }


    }

    let toCalc = Object.entries(playersHands);

    for (let [name, i] of toCalc) {
        playersHands[name] = 0;
        for (let j of i) {
            if (j.length < 3) {
                let [power, type] = j.split("");

                if (isNaN(power)) {
                    power = cardPower[power];
                }

                type = cardType[type];


                playersHands[name] += Number(power) * type;

            } else {
                let [powerOne, powerTwo, type] = j.split("");
                let newPower = powerOne + powerTwo;

                type = cardType[type];

                playersHands[name] += Number(newPower) * type;
            }

        }

    }

    toPrint = Object.keys(playersHands)
        .forEach(x => {
            console.log(`${x}: ${playersHands[x]}`);
        });


}

cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]
)