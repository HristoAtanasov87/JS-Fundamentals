function solve(input) {
    let account = input[0];
    let accountArray = account.split(" ");

    let index = 1;
    let command = input[index];

    while (command != "Play!") {
        let commandArray = command.split(" ");

        let toDo = commandArray[0];
        let game = "";
        let splitGame = [];

        if (toDo === "Expansion") {
            let expansonGame = commandArray[1];
            splitGame = expansonGame.split("-");
            game = splitGame[0];
        } else {
            game = commandArray[1];
        }

        function test(value) {
            if (value === game) {
                return true;
            } else {
                false;
            }
        }

        switch (toDo) {
            case "Install":
                if (accountArray.find(test)) {
                    index++;
                    command = input[index];
                    continue;
                } else {
                    accountArray.push(game);
                }
                break;
            case "Uninstall":
                if (accountArray.find(test)) {
                    let found = accountArray.indexOf(game);
                    let cutOut = accountArray.splice(found, 1)
                } else {
                    index++;
                    command = input[index];
                    continue;
                }
                break;
            case "Update":
                if (accountArray.find(test)) {
                    let found = accountArray.indexOf(game);
                    let cutOut = accountArray.splice(found, 1);
                    accountArray.push(cutOut[0]);
                } else {
                    index++;
                    command = input[index];
                    continue;
                }
                break;
            case "Expansion":
                if (accountArray.find(test)) {
                    let expandedGame = `${splitGame[0]}:${splitGame[1]}`;
                    let found = accountArray.indexOf(game);
                    accountArray.splice(found + 1, 0, expandedGame);
                } else {
                    index++;
                    command = input[index];
                    continue;
                }
                break;
        }

        index++;
        command = input[index];
    }

    console.log(accountArray.join(" "));
}

solve(['CS WoW Diablo',
    'Uninstall XCOM',
    'Update PeshoGame',
    'Update WoW',
    'Expansion Civ-V',
    'Play!']

)