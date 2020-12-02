function solve(input) {
    let text = input.shift();
    let actions = {
        TakeOdd: (text) => {
            let rawPass = "";
            for (let i = 1; i < text.length; i += 2) {
                rawPass += text[i];
            }
            return rawPass;
        },
        Cut: (password, index, length) => {
            let cut = password.substring(index, index + length);
            password = password.replace(cut, "");
            return password;
        },
        Substitute: (password, substring, substitute) => {
            if (password.includes(substring)) {
                while (password.includes(substring)) {
                    password = password.replace(substring, substitute);
                }
                console.log(password);
                return password;
            } else {
                console.log("Nothing to replace!");
                return password;
            }
        }
    }

    let command = input.shift();
    let password = "";

    while (command !== "Done") {
        if (command === "TakeOdd") {
            password = actions.TakeOdd(text);
            text = password;
            console.log(text);

        } else if (command.includes("Cut")) {
            command = command.split(" ");
            let [cutCommand, index, length] = command;
            index = Number(index);
            length = Number(length);
            text = actions.Cut(text, index, length);
            console.log(text);

        } else if (command.includes("Substitute")) {
            command = command.split(" ");
            let [subCommand, substring, substitute] = command;
            text = actions.Substitute(text, substring, substitute);
        }

        command = input.shift();
    }

    console.log(`Your password is: ${text}`);
}

// function solve(input) {
//     let text = input.shift();

//     let [command, firstPar, secondPar] = input.shift().split(" ");

//     while (command != "Done") {
//         switch (command) {
//             case "TakeOdd":
//                 let rawPass = "";
//                 for (let i = 1; i < text.length; i += 2) {
//                     rawPass += text[i];
//                 }
//                 text = rawPass;
//                 console.log(text);
//                 break;
//             case "Cut":
//                 let index = Number(firstPar);
//                 let length = Number(secondPar);
//                 let cut = text.substring(index, index + length);
//                 text = text.replace(cut, "");
//                 console.log(text);
//                 break;
//             case "Substitute":
//                 if (text.includes(firstPar)) {
//                     while (text.includes(firstPar)) {
//                         text = text.replace(firstPar, secondPar);
//                     }
//                     console.log(text);

//                 } else {
//                     console.log("Nothing to replace!");
//                 }
//                 break;
//         }

//         [command, firstPar, secondPar] = input.shift().split(" ");
//     }
//     console.log(`Your password is: ${text}`);
// }

solve([
    'Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr ',
    'TakeOdd',
    'Cut 15 3',
    'Substitute :: -',
    'Substitute | ^',
    "TakeOdd",
    'Done'
]);

// solve([
//     'up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy',
//     'TakeOdd',
//     'Cut 18 2',
//     'Substitute ! ***',
//     'Substitute ? .!.',
//     'Done'
// ]);
