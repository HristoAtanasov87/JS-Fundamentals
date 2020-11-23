function solve(input) {
    let string = input.shift();
    let pattern = input.shift();

    let first = string.indexOf(pattern);
    let last = string.lastIndexOf(pattern);

    while (first !== -1 && last !== -1 && first !== last) {
        let remaining = "";
        remaining += string.substring(0, first);
        if (last === first) {
            remaining += string.substring(first + pattern.length);
        } else {
            remaining += string.substring(first + pattern.length, last);
            remaining += string.substring(last + pattern.length);
        }
        string = remaining;

        console.log("Shaked it.");

        if (string == "") {
            break;
        }

        let indexPattern = Math.floor(pattern.length / 2);
        let newPattern = "";
        newPattern += pattern.substring(0, indexPattern);
        newPattern += pattern.substring(indexPattern + 1);
        pattern = newPattern;

        if (pattern == "") {
            break;
        }

        first = string.indexOf(pattern);
        last = string.lastIndexOf(pattern);
    }

    console.log("No shake.");

    if (string !== "") {
        console.log(string);
    }

}

solve(['staaaa', 'st']);