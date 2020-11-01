function solve(distance, passengers, pricePerLiter) {
    let fuelNeeded = (distance / 100 * 7) + (passengers * 0.1);
    let moneyNeeded = fuelNeeded * pricePerLiter;

    return `Needed money for that trip is ${moneyNeeded}lv.`;
}

console.log(solve(260, 9, 2.49));