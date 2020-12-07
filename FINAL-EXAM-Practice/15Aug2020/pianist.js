function solve(input) {
    let pieces = Number(input.shift());

    let music = {};

    for (let i = 1; i <= pieces; i++) {
        let [pieceName, author, key] = input.shift().split("|");

        if (!music.hasOwnProperty(pieceName)) {
            music[pieceName] = {};
        }

        music[pieceName].key = key;
        music[pieceName].author = author;
    }

    let actions = {
        Add: (music, pieceName, ...parameters) => {
            let [author, key] = parameters;
            if (music.hasOwnProperty(pieceName)) {
                console.log(`${pieceName} is already in the collection!`);
            } else {
                music[pieceName] = {};
                music[pieceName].key = key;
                music[pieceName].author = author;
                console.log(`${pieceName} by ${author} in ${key} added to the collection!`);
            }
        },
        Remove: (music, pieceName) => {
            if (music.hasOwnProperty(pieceName)) {
                delete music[pieceName];
                console.log(`Successfully removed ${pieceName}!`);
            } else {
                console.log(`Invalid operation! ${pieceName} does not exist in the collection.`);
            }
        },
        ChangeKey: (music, pieceName, ...parameters) => {
            let [key] = parameters;
            if (music.hasOwnProperty(pieceName)) {
                music[pieceName].key = key;
                console.log(`Changed the key of ${pieceName} to ${key}!`);
            } else {
                console.log(`Invalid operation! ${pieceName} does not exist in the collection.`);
            }
        }
    }
    let command = input.shift();

    while (command != "Stop") {
        let [actionName, pieceName, ...parameters] = command.split("|");
        let action = actions[actionName];
        action(music, pieceName, ...parameters);

        command = input.shift()
    }

    let toSort = Object.entries(music).sort(sortMusic);

    function sortMusic(a, b) {
        let [pieceNameA, valuesA] = a;
        let [pieceNameB, valuesB] = b;

        return pieceNameA.localeCompare(pieceNameB) || valuesA.author.localeCompare(valuesB.author);
    }

    for (let [pieceName, values] of toSort) {
        console.log(`${pieceName} -> Composer: ${values.author}, Key: ${values.key}`);
    }
}

// solve([
//     '3',
//     'Fur Elise|Beethoven|A Minor',
//     'Moonlight Sonata|Beethoven|C# Minor',
//     'Clair de Lune|Debussy|C# Minor',
//     'Add|Sonata No.2|Chopin|B Minor',
//     'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
//     'Add|Fur Elise|Beethoven|C# Minor',
//     'Remove|Clair de Lune',
//     'ChangeKey|Moonlight Sonata|C# Major',
//     'Stop'
// ]);

solve([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
]);