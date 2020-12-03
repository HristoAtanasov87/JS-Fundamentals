function solve(input) {
    let message = input.shift();

    let line = input.shift();

    while (line != "Reveal") {
        let [action, ...parameters] = line.split(":|:");

        if (action === "InsertSpace") {

            let [index] = parameters.map(Number);
            let firstHalf = message.substring(0, index);
            let secondHalf = message.substring(index);
            message = firstHalf + " " + secondHalf;
            console.log(message);

        } else if (action === "Reverse") {

            let [toReplace] = parameters;
            let index = message.indexOf(toReplace);

            if (index != -1) {

                let end = index + toReplace.length;
                let toCut = message.substring(index, end);
                let firstHalf = message.substring(0, index);
                let secondHalf = message.substring(end);
                message = firstHalf + secondHalf;
                let toAdd = "";
                for (let i = toCut.length - 1; i >= 0; i--) {
                    toAdd += toCut[i];
                }
                message += toAdd;
                console.log(message);
            } else {
                console.log("error");
            }
        } else if (action === "ChangeAll") {
            let [toReplace, replacement] = parameters;
            while (message.includes(toReplace)) {
                message = message.replace(toReplace, replacement);
            }
            console.log(message);
        }

        line = input.shift();
    }

    console.log(`You have a new text message: ${message}`);
}

// solve([
//     'heVVodar!gniV',
//     'ChangeAll:|:V:|:l',
//     'Reverse:|:!gnil',
//     'InsertSpace:|:5',
//     'Reveal'
// ])

solve([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
])