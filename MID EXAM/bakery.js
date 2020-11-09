function bakery(biscuitsPerDay, workers, competingFactory) {
    let dailyProduction = Math.floor(biscuitsPerDay * workers);
    let monthlyProduction = 0;

    for (let i = 1; i <= 30; i++) {
        if (i % 3 === 0) {
            monthlyProduction += Math.floor(0.75 * dailyProduction);
        } else {
            monthlyProduction += dailyProduction;
        }
    }

    let diff = monthlyProduction - competingFactory;
    let percentage = diff / competingFactory * 100;

    console.log(`You have produced ${monthlyProduction} biscuits for the past month.`);

    if (percentage > 0) {
        console.log(`You produce ${percentage.toFixed(2)} percent more biscuits.`);
    } else {
        console.log(`You produce ${(Math.abs(percentage)).toFixed(2)} percent less biscuits.`);
    }
}

bakery(78, 8, 16000);

bakery(65, 12, 26000)