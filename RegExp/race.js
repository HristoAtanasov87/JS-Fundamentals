function solve(input) {
    let racers = {};
    let list = input.shift().split(", ");

    for (let i of list) {
        if (!racers.hasOwnProperty(i)) {
            racers[i] = 0;
        }
    }

    let patternName = /[A-Za-z]/g;
    let patternDist = /\d/g;

    let command = input.shift();

    while (command != "end of race") {
        let name = command.match(patternName).join("");
        let distanceArray = command.match(patternDist)
            .map(Number);
        let distance = 0;
        for (j of distanceArray) {
            distance += j;
        }

        if (racers.hasOwnProperty(name)) {
            racers[name] += distance;
        }

        command = input.shift();
    }

    let toSort = Object.keys(racers).sort((a, b) => racers[b] - racers[a]);

    console.log(`1st place: ${toSort[0]}`);
    console.log(`2nd place: ${toSort[1]}`);
    console.log(`3rd place: ${toSort[2]}`);
}

solve([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
])