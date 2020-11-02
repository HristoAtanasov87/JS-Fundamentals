function solve(input) {
    let arrayToOperate = [];
    let counter = 0;

    for (let i = 0; i < input.length; i++) {
        command = input[i];
        counter++;

        switch (command) {
            case "add":
                arrayToOperate.push(counter);
                break;
            case "remove":
                arrayToOperate.pop();
        }
    }

    if(arrayToOperate[0] === undefined) {
        console.log("Empty");
    } else {
        console.log(arrayToOperate.join(" "));
    }
}

solve(['remove', 'remove', 'remove']);