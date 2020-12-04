function solve(input) {

    let pattern = /(=|\/)(?<location>[A-Z][A-Za-z]{2,})\1/g;
    let locations = [];

    while (match = pattern.exec(input)) {
        locations.push(match.groups.location);
    }

    let travelPoints = 0;
    for (let i of locations) {
        travelPoints += i.length;
    }

    console.log(`Destinations: ${locations.join(", ")}`);
    console.log(`Travel Points: ${travelPoints}`);
}

solve("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");

solve("ThisIs some InvalidInput");