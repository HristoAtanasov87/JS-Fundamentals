function solve(input) {
    let desiredThickness = input[0];

    for (let i = 1; i < input.length; i++) {
        let initialThickness = input[i];
        let modifiedCrystal = initialThickness;
        console.log(`Processing chunk ${modifiedCrystal} microns`);
        let cutCounter = 0;
        let lapCounter = 0;
        let grindCounter = 0;
        let etchCounter = 0;
        let xrayCounter = 0;

        if (initialThickness / 4 >= desiredThickness) {  // CUT 
            for (let j = 0; j < Number.MAX_SAFE_INTEGER; j++) {
                cutCounter++;
                modifiedCrystal /= 4;
                if (modifiedCrystal / 4 <= desiredThickness) {
                    console.log(`Cut x${cutCounter}`);
                    modifiedCrystal = Math.trunc(modifiedCrystal); // TRANSPORTING AND WASHING;
                    console.log("Transporting and washing");
                    break;
                }
            }

            if (modifiedCrystal === desiredThickness) {
                console.log(`Finished crystal ${desiredThickness} microns`);
                continue;
            }
        }

        if (modifiedCrystal * 0.8 >= desiredThickness) {  // LAP
            for (let j = 0; j < Number.MAX_SAFE_INTEGER; j++) {
                lapCounter++;
                modifiedCrystal *= 0.8;
                if (modifiedCrystal * 0.8 <= desiredThickness) {
                    console.log(`Lap x${lapCounter}`);
                    modifiedCrystal = Math.trunc(modifiedCrystal); // TRANSPORTING AND WASHING;
                    console.log("Transporting and washing");
                    break;
                }
            }

            if (modifiedCrystal === desiredThickness) {
                console.log(`Finished crystal ${desiredThickness} microns`);
                continue;
            }
        }



        if (modifiedCrystal - 20 >= desiredThickness) {  // GRIND
            for (let j = 0; j < Number.MAX_SAFE_INTEGER; j++) {
                grindCounter++;
                modifiedCrystal -= 20;
                if (modifiedCrystal - 20 <= desiredThickness) {
                    console.log(`Grind x${grindCounter}`);
                    modifiedCrystal = Math.trunc(modifiedCrystal); // TRANSPORTING AND WASHING;
                    console.log("Transporting and washing");
                    break;
                }
            }

            if (modifiedCrystal === desiredThickness) {
                console.log(`Finished crystal ${desiredThickness} microns`);
                continue;
            }
        }

        if (modifiedCrystal - 2 >= desiredThickness - 1) {  // ETCH
            for (let j = 0; j < Number.MAX_SAFE_INTEGER; j++) {
                etchCounter++;
                modifiedCrystal -= 2;

                if (modifiedCrystal - 2 === desiredThickness - 3) {
                    console.log(`Etch x${etchCounter}`);
                    modifiedCrystal = Math.trunc(modifiedCrystal); // TRANSPORTING AND WASHING;
                    console.log("Transporting and washing");
                    break;
                }

                if (modifiedCrystal === desiredThickness) {
                    console.log(`Etch x${etchCounter}`);
                    modifiedCrystal = Math.trunc(modifiedCrystal); // TRANSPORTING AND WASHING;
                    console.log("Transporting and washing");
                    break;
                }

            }

            if (modifiedCrystal === desiredThickness) {
                console.log(`Finished crystal ${desiredThickness} microns`);
                continue;
            }
        }

        if (modifiedCrystal === desiredThickness - 1) {  // X-RAY
            for (let j = 0; j < Number.MAX_SAFE_INTEGER; j++) {
                xrayCounter++;
                modifiedCrystal += 1;
                break;
            }

            console.log(`X-ray x${xrayCounter}`);

            if (modifiedCrystal === desiredThickness) {
                console.log(`Finished crystal ${desiredThickness} microns`);
                continue;
            }
        }
    }
}

solve([1001, 4000, 8100])