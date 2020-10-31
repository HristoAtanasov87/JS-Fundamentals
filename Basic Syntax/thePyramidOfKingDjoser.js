function solve(base, increment) {
    let baseDimensions = base;
    let step = increment;
    let count = 0;
    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold = 0;

    while (baseDimensions > 2) {
        count++;
        let currentStone = (baseDimensions - 2) * (baseDimensions - 2) * step;
        let currentMarble = (baseDimensions * 4 - 4) * step;

        if (count % 5 === 0) {
            lapisLazuli += currentMarble;
        } else {
            marble += currentMarble
        }

        stone += currentStone;
        baseDimensions -= 2;
    }

    gold = baseDimensions * baseDimensions * step;
    count++;

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(count * step)}`);
}

solve(11, 1);