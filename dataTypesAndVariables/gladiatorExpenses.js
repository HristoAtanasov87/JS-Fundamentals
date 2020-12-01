function solve(firstParam, secondParam, thirdParam, fourthParam, fifthParam) {
    let lostFights = firstParam;
    let helmetPrice = secondParam;
    let swordPrice = thirdParam;
    let shieldPrice = fourthParam;
    let armorPrice = fifthParam;

    let helmetCheck = Math.trunc(lostFights / 2);
    let swordCheck = Math.trunc(lostFights / 3);
    let shieldCheck = Math.trunc(lostFights / 6);
    let armorCheck = Math.trunc(shieldCheck / 2);

    let bill = 0;

    if (helmetCheck >= 1) {
        bill += helmetPrice * helmetCheck;
    }
    
    if (swordCheck >= 1) {
        bill += swordPrice * swordCheck;
    }

    if (shieldCheck >= 1) {
        bill += shieldPrice * shieldCheck;
    }

    if (armorCheck >= 1) {
        bill += armorPrice * armorCheck;
    }

    console.log(`Gladiator expenses: ${bill.toFixed(2)} aureus`);
}

solve(23,
    12.50,
    21.50,
    40,
    200
    )