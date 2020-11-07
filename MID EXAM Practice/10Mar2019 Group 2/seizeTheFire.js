function fire(input) {
    let fireGrid = input.shift().split("#");
    let water = Number(input.shift());

    let effort = 0;
    let fireExtinguished = 0;
    let cells = [];

    for (let i = 0; i < fireGrid.length; i++) {

        let fireCell = fireGrid[i].split(" = ");
        let [fireValue, range] = fireCell;
        range = Number(range);

        if (range > 80 && range <= 125 && fireValue == "High") {

            if (water >= range) {
                water -= range;
                effort += range * 0.25;
                fireExtinguished += range;
                cells.push(range);
            } else {
                continue;
            }

        } else if (range > 50 && range <= 80 && fireValue == "Medium") {

            if (water >= range) {
                water -= range;
                effort += range * 0.25;
                fireExtinguished += range;
                cells.push(range);
            } else {
                continue;
            }

        } else if (range >= 1 && range <= 50 && fireValue == "Low") {

            if (water >= range) {
                water -= range;
                effort += range * 0.25;
                fireExtinguished += range;
                cells.push(range);
            } else {
                continue;
            }
        }
    }
    console.log("Cells:");
    cells.forEach(i => console.log(` - ${i}`));

    console.log(`Effort: ${effort.toFixed(2)}`);
    console.log(`Total Fire: ${fireExtinguished}`);
}

fire(['High = 89#Low = 28#Medium = 77#Low = 23', '1250']);

// fire([
//     'High = 150#Low = 55#Medium = 86#Low = 40#High = 110#Medium = 77',
//     '220'
// ]);