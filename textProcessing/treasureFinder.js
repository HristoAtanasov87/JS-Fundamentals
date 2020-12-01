function solve(input) {
    let key = input.shift().split(" ").map(Number);
    let string = input.shift();


    while (string !== "find") {
        let decrypted = "";
        let letterCode = 0;
        let key2 = key.slice(0);
        for (let i = 0; i < string.length; i++) {
            let keyCode = key2.shift();
            letterCode = string.charCodeAt(i);
            letterCode -= keyCode;

            key2.push(keyCode);
            decrypted += String.fromCharCode(letterCode);

        }

        let startTreasure = decrypted.indexOf("&");
        let endTreasure = decrypted.lastIndexOf("&");
        let startCoordinates = decrypted.indexOf("<");
        let endCoordinates = decrypted.indexOf(">");

        let treasure = decrypted.substring(startTreasure + 1, endTreasure);
        let coordinates = decrypted.substring(startCoordinates + 1, endCoordinates);

        console.log(`Found ${treasure} at ${coordinates}`);
        string = input.shift();
    }
}

solve([
    '1 2 1 3',
    "ikegfp'jpne)bv=41P83X@",
    "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",
    'find'
])

solve([
    '1 4 2 5 3 2 1',
    `Ulgwh"jt$ozfj!'kqqg(!bx"A3U237GC`,
    "tsojPqsf$(lrne'$CYfqpshksdvfT$>634O57YC",
    "'stj)>34W68Z@",
    'find'
])