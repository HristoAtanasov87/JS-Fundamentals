function solve(input) {
    let coordinates = input.slice();

    let xOne = coordinates[0];
    let yOne = coordinates[1];
    let xTwo = coordinates[2];
    let yTwo = coordinates[3];

    let firstCheck = false;
    let secondCheck = false;
    let thirdCheck = false;

    let firstDistancePowered = Math.pow(xOne, 2) + Math.pow(yOne, 2);
    let firstDistance = Math.sqrt(firstDistancePowered);

    if (Number.isInteger(firstDistance)) {
        firstCheck = true;
    }

    let secondDistancePowered = Math.pow(xTwo, 2) + Math.pow(yTwo, 2);
    let secondDistance = Math.sqrt(secondDistancePowered);

    if (Number.isInteger(secondDistance)) {
        secondCheck = true;
    }

    let distancePowered = Math.pow(Math.abs((xOne - xTwo)), 2) + Math.pow(Math.abs((yOne - yTwo)), 2);   
    
    let distance = Math.sqrt(distancePowered);

    if (Number.isInteger(distance)) {
        thirdCheck = true;
    }

    if (firstCheck) {
        console.log(`{${xOne}, ${yOne}} to {0, 0} is valid`);
    } else {
        console.log(`{${xOne}, ${yOne}} to {0, 0} is invalid`);
    }

    if (secondCheck) {
        console.log(`{${xTwo}, ${yTwo}} to {0, 0} is valid`);
    } else {
        console.log(`{${xTwo}, ${yTwo}} to {0, 0} is invalid`);
    }

    if (thirdCheck) {
        console.log(`{${xOne}, ${yOne}} to {${xTwo}, ${yTwo}} is valid`);
    } else {
        console.log(`{${xOne}, ${yOne}} to {${xTwo}, ${yTwo}} is invalid`);
    }
}

solve([3, 0, 0, 4]);