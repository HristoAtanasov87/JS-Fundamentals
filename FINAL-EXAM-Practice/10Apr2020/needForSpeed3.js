function solve(input) {
    let carsCount = Number(input.shift());
    let carsOwned = {};

    for (let i = 1; i <= carsCount; i++) {
        let [carName, mileage, fuel] = input.shift().split("|");
        mileage = Number(mileage);
        fuel = Number(fuel);

        if (!carsOwned.hasOwnProperty(carName)) {
            carsOwned[carName] = {
                mileage: 0,
                fuel: 0
            }
        }

        carsOwned[carName].mileage += mileage;
        carsOwned[carName].fuel += fuel;
    }

    let actions = {
        Drive: (carsOwned, carName, ...parameters) => {
            let [distance, fuel] = parameters.map(Number);
            if (carsOwned[carName].fuel >= fuel) {
                carsOwned[carName].fuel -= fuel;
                carsOwned[carName].mileage += distance;
                console.log(`${carName} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
            } else {
                console.log("Not enough fuel to make that ride");
            }
            if (carsOwned[carName].mileage >= 100000) {
                delete carsOwned[carName];
                console.log(`Time to sell the ${carName}!`);
            }
        },
        Refuel: (carsOwned, carName, ...parameters) => {
            let [fuel] = parameters.map(Number);

            if (carsOwned[carName].fuel + fuel <= 75) {
                carsOwned[carName].fuel += fuel;
            } else {
                fuel = 75 - carsOwned[carName].fuel;
                carsOwned[carName].fuel = 75;
            }

            console.log(`${carName} refueled with ${fuel} liters`);
        },
        Revert: (carsOwned, carName, ...parameters) => {
            let [kilometers] = parameters.map(Number);
            if (carsOwned[carName].mileage - kilometers >= 10000) {
                carsOwned[carName].mileage -= kilometers;
                console.log(`${carName} mileage decreased by ${kilometers} kilometers`);
            } else {
                carsOwned[carName].mileage = 10000;
            }
        }
    }

    let command = input.shift();
    while (command != "Stop") {
        let [actionName, carName, ...parameters] = command.split(" : ");

        let action = actions[actionName];
        action(carsOwned, carName, ...parameters);

        command = input.shift();
    }

    let toSort = Object.entries(carsOwned).sort(sortCars);

    function sortCars(a, b) {
        let [carNameA, valuesA] = a;
        let [carNameB, valuesB] = b;

        return valuesB.mileage - valuesA.mileage || carNameA.localeCompare(carNameB);
    }

    for (let [carName, values] of toSort) {
        console.log(`${carName} -> Mileage: ${values.mileage} kms, Fuel in the tank: ${values.fuel} lt.`);
    }
}

// solve([
//     '3',
//     'Audi A6|38000|62',
//     'Mercedes CLS|11000|35',
//     'Volkswagen Passat CC|45678|5',
//     'Drive : Audi A6 : 543 : 47',
//     'Drive : Mercedes CLS : 94 : 11',
//     'Drive : Volkswagen Passat CC : 69 : 8',
//     'Refuel : Audi A6 : 50',
//     'Revert : Mercedes CLS : 500',
//     'Revert : Audi A6 : 30000',
//     'Stop'
// ]);

solve([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
]);