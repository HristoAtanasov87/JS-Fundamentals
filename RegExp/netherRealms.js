function solve(input) {
    //split by "," and trim input
    let [namesString] = input;
    let namesArray = namesString.split(",");
    let demons = {};

    for (let i = 0; i < namesArray.length; i++) {
        // create pattern for health and calculate it
        let patternName = /[^\d+\-\*\/\., ]/g;

        let demonName = namesArray[i].trim();
        if (demonName.includes(" ")) {
            continue;
        }
        demons[demonName] = {};

        let match = demonName.match(patternName);
        let demonHealth = 0;
        for (let iterator of match) {
            demonHealth += iterator.charCodeAt(0);
        }
        demons[demonName].health = demonHealth;
        //create pattern for calculation of numbers and calculate
        let patternNums = /[+|-]?\d+(\.\d+)?/g;

        let matchNums = demonName.match(patternNums);
        let demonDamage = 0;
        demons[demonName].damage = demonDamage;
        if (matchNums === null) {
            continue;
        }
        matchNums = matchNums.map(Number);
        for (let iterator of matchNums) {
            demonDamage += iterator;
        }
        demons[demonName].damage = demonDamage;

        //create pattern for multy or divide
        let patternAdditional = /[\*\/]/g;

        let matchAdditional = demonName.match(patternAdditional);
        if (matchAdditional === null) {
            continue;
        }
        for (let iterator of matchAdditional) {
            if (iterator === "/") {
                demonDamage /= 2;
            } else {
                demonDamage *= 2;
            }
        }

        demons[demonName].damage = demonDamage;

    }

    //sort the object
    let toSort = Object.entries(demons).sort(([nameA], [nameB]) => nameA.localeCompare(nameB));
    //print
    for (let [name, myObj] of toSort) {
        console.log(`${name} - ${myObj.health} health, ${(myObj.damage).toFixed(2)} damage`);
    }
}

// solve(['M3ph-0.5s-0.5t0.0**']);
solve(['Azazel---2']);
// solve(['Gosh*o']);
