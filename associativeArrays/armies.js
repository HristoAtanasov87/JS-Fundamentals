function armies(input) {
    let leaders = {};

    let actions = {
        arriving: (leaders, leader) => {
            if (!leaders.hasOwnProperty(leader)) {
                leaders[leader] = {};
            }
        },
        adding: (leaders, leader, armyName, armyCount) => {

            if (leaders.hasOwnProperty(leader)) {
                if (!leaders[leader].hasOwnProperty(armyName)) {
                    leaders[leader][armyName] = armyCount;

                }
            }
        },
        addingCount: (leaders, armyName, armyCount) => {
            for (let i in leaders) {
                if (leaders[i].hasOwnProperty(armyName)) {
                    leaders[i][armyName] += armyCount;
                }
            }
        },
        defeat: (leaders, leader) => {
            if (leaders.hasOwnProperty(leader)) {
                delete leaders[leader];
            }
        }
    }

    for (let i of input) {
        if (i.includes("arrives")) {

            let [leader] = i.split(" arrives");
            actions.arriving(leaders, leader);

        } else if (i.includes(":")) {

            let [leader, args] = i.split(": ");
            let [armyName, armyCount] = args.split(", ")
            armyCount = Number(armyCount);
            actions.adding(leaders, leader, armyName, armyCount);

        } else if (i.includes("+")) {

            let [armyName, armyCount] = i.split(" + ");
            armyCount = Number(armyCount);
            actions.addingCount(leaders, armyName, armyCount);

        } else if (i.includes("defeated")) {

            let [leader] = i.split(" defeated");
            actions.defeat(leaders, leader);
        }
    }

    let toSort = Object.entries(leaders);
    toSort.sort(([leaderA, objectA], [leaderB, objectB]) => {
        let sumA = Object.values(objectA);
        let criteriaA = 0;
        for (let i of sumA) {
            criteriaA += i;
        }

        let sumB = Object.values(objectB);
        let criteriaB = 0;
        for (let j of sumB) {
            criteriaB += j;
        }

        return criteriaB - criteriaA;
    });

    for (let [leader, armyObject] of toSort) {
        let totalArmy = 0;
        for (let i in armyObject) {
            totalArmy += armyObject[i];
        }

        console.log(`${leader}: ${totalArmy}`);

        let toSortArmy = Object.entries(armyObject);
        toSortArmy.sort(([armyNameA, armyCountA], [armyNameB, armyCountB]) => armyCountB - armyCountA);

        for (let [armyName, armyCount] of toSortArmy) {
            console.log(`>>> ${armyName} - ${armyCount}`);
        }


    }

}

armies([
    'Rick Burr arrives',
    'Fergus: Wexamp, 30245',
    'Rick Burr: Juard, 50000',
    'Findlay arrives',
    'Findlay: Britox, 34540',
    'Wexamp + 6000',
    'Juard + 1350',
    'Britox + 4500',
    'Porter arrives',
    'Porter: Legion, 55000',
    'Legion + 302',
    'Rick Burr defeated',
    'Porter: Retix, 3205'
]);