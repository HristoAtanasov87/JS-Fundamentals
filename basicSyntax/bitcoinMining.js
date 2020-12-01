function solve(input) {
    let daylyEarnedGold = 0;
    let totalMinedGold = 0;
    let count = 0;
    let bitcoinsBought = 0;
    let levaEarned = 0;
    let bitcoinCount = 0;
    let dayFirstBought = 0;
    let currentBitcoinsBought = 0;

    for (let i = 0; i <= input.length - 1; i++) {
        count++;

        if (count % 3 === 0) {
            daylyEarnedGold = input[i] * 0.7;
        } else {
            daylyEarnedGold = input[i];
        }

        totalMinedGold += daylyEarnedGold;
        levaEarned = totalMinedGold * 67.51;

        if (levaEarned / 11949.16 > 1) {
            currentBitcoinsBought = Math.floor(levaEarned / 11949.16)
            bitcoinsBought += currentBitcoinsBought
            bitcoinCount++;
            totalMinedGold -= currentBitcoinsBought * 11949.16 / 67.51
            levaEarned = totalMinedGold * 67.51;
            if (bitcoinCount === 1) {
                dayFirstBought = count;
            }
            currentBitcoinsBought = 0;
        }
    }
    
    console.log(`Bought bitcoins: ${bitcoinsBought}`);
    if (dayFirstBought > 0) {
        console.log(`Day of the first purchased bitcoin: ${dayFirstBought}`);
    }
    console.log(`Left money: ${levaEarned.toFixed(2)} lv.`);
}

solve([3124.15, 504.212, 2511.124]);