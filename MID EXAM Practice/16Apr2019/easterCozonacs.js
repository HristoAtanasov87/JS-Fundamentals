function cozonacs(input) {
    let budget = Number(input.shift());

    let flourPrice = Number(input.shift());
    let eggsPrice = flourPrice * 0.75;
    let milkPrice = flourPrice * 1.25 / 4;

    let cozonacPrice = flourPrice + eggsPrice + milkPrice;
    let coloredEggs = 0;
    let cozonacsMade = 0;

    while (budget > cozonacPrice) {
        cozonacsMade++;
        coloredEggs += 3;
        budget -= cozonacPrice;

        if (cozonacsMade % 3 == 0) {
            coloredEggs = coloredEggs - (cozonacsMade - 2);
        }
    }

    console.log(`You made ${cozonacsMade} cozonacs! Now you have ${coloredEggs} eggs and ${budget.toFixed(2)}BGN left.`);
}

cozonacs(['20.50', '1.25']);


cozonacs(['15.75', '1.4']);
