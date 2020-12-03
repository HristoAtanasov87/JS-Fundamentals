function solve(input) {
    let command = input.shift();
    let pirates = {};

    let actions = {
        Plunder: (pirates, array) => {
            let [town, people, gold] = array;
            people = Number(people);
            gold = Number(gold);
            pirates[town].population -= people;
            pirates[town].gold -= gold;

            console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);

            if (pirates[town].population <= 0 || pirates[town].gold <= 0) {
                delete pirates[town];
                console.log(`${town} has been wiped off the map!`);
            }
        },
        Prosper: (pirates, array) => {
            let [town, gold] = array;
            gold = Number(gold);
            if (gold > 0) {
                pirates[town].gold += gold;
                console.log(`${gold} gold added to the city treasury. ${town} now has ${pirates[town].gold} gold.`);
            } else {
                console.log("Gold added cannot be a negative number!");
            }
        }
    }

    while (command !== "Sail") {
        let [town, population, gold] = command.split("||");
        population = Number(population);
        gold = Number(gold);

        if (!pirates.hasOwnProperty(town)) {
            pirates[town] = {
                population: 0,
                gold: 0
            }
        }

        pirates[town].population += population;
        pirates[town].gold += gold;

        command = input.shift()
    }
    command = input.shift()

    while (command !== "End") {
        let [action, ...arrayProperties] = command.split("=>");

        actions[action](pirates, arrayProperties);

        command = input.shift()
    }

    console.log(sortPirates(pirates).join("\n"));

    function sortPirates(myObj) {
        let toSort = Object.entries(myObj);

        if (toSort.length > 0) {

            toSort.sort(([townA, objA], [townB, objB]) => {

                if (objA.gold !== objB.gold) {
                    return objB.gold - objA.gold;
                } else {
                    return townA.localeCompare(townB);
                }

            })
            let arrayToPrint = [`Ahoy, Captain! There are ${toSort.length} wealthy settlements to go to:`];

            for (let i of toSort) {
                let [town, propertiesObj] = i;
                let people = propertiesObj.population;
                let gold = propertiesObj.gold;

                arrayToPrint.push(`${town} -> Population: ${people} citizens, Gold: ${gold} kg`);

            }

            return arrayToPrint;

        } else {
            return "Ahoy, Captain! All targets have been plundered and destroyed!"
        }
    }
}

// solve([
//     'Tortuga||345000||1250',
//     'Santo Domingo||240000||630',
//     'Havana||410000||1100',
//     'Sail',
//     'Plunder=>Tortuga=>75000=>380',
//     'Prosper=>Santo Domingo=>180',
//     'End'
// ]);

solve([
    'Nassau||95000||1000',
    'San Juan||930000||1250',
    'Campeche||270000||690',
    'Port Royal||320000||1000',
    'Port Royal||100000||2000',
    'Sail',
    'Prosper=>Port Royal=>-200',
    'Plunder=>Nassau=>94000=>750',
    'Plunder=>Nassau=>1000=>150',
    'Plunder=>Campeche=>150000=>690',
    'End'
]);