function solve(input) {
    let text = input.shift();

    let command = input.shift();
    while (command != "Travel") {
        let [action, ...parameters] = command.split(":");

        if (action === "Add Stop") {
            let [index, string] = parameters;
            index = Number(index);

            if (index >= 0 && index < text.length) {
                let firstHalf = text.substring(0, index);
                let secondHalf = text.substring(index);
                text = firstHalf + string + secondHalf;
            }
            console.log(text);

        } else if (action === "Remove Stop") {
            let [start, end] = parameters.map(Number);

            if (start >= 0 && start < text.length && end >= 0 && end < text.length) {
                text = text.substring(0, start) + text.substring(end + 1);
            }

            console.log(text);
        } else if (action === "Switch") {
            let [oldString, newString] = parameters;

            let pattern = new RegExp(oldString, "g");
            text = text.replace(pattern, newString);

            console.log(text);
        }
        command = input.shift();
    }

    console.log(`Ready for world tour! Planned stops: ${text}`);
}

solve([
    'Hawai::Cyprys-Greece',
    'Add Stop:7:Rome',
    'Remove Stop:11:16',
    'Switch:Hawai:Bulgaria',
    'Travel'
])
