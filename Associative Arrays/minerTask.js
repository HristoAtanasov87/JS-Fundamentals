function miner(input) {
    let resourceList = {};

    for (let i = 0; i < input.length; i++) {
        if (i % 2 == 0) {
            if (!resourceList.hasOwnProperty(input[i])) {
                resourceList[input[i]] = 0;
            }

            resourceList[input[i]] += Number(input[++i]);
        }
    }

    for (iterator in resourceList) {
        console.log(`${iterator} -> ${resourceList[iterator]}`);
    }


}

miner([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17',
    'Gold',
    '155'
]
);