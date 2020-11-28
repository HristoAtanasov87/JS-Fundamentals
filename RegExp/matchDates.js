function solve([text]) {
    let pattern = /(?<day>\d{2})([\.\-\/]?)(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})/g;

    let found = pattern.exec(text);

    while (found !== null) {
        let day = found.groups["day"];
        let month = found.groups["month"];
        let year = found.groups["year"];

        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);

        found = pattern.exec(text);
    }
}

solve(["13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016"])