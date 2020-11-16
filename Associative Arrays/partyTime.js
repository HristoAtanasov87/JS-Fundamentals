function party(input) {
    let myObj = {
        "VIP": [],
        "regular": []
    }

    let command = input.shift();

    while (command !== "PARTY") {
        let toCheck = command[0];
        if (isNaN(toCheck)) {
            myObj.regular.push(command);
        } else {
            myObj.VIP.push(command);
        }

        command = input.shift();
    }

    for (let i of input) {
        if (myObj.VIP.includes(i)) {
            let index = myObj.VIP.indexOf(i);
            myObj.VIP.splice(index, 1);
        }

        if (myObj.regular.includes(i)) {
            let index = myObj.regular.indexOf(i);
            myObj.regular.splice(index, 1);
        }
    }

    console.log(`${myObj.VIP.length + myObj.regular.length}`);
    myObj.VIP.forEach(x => console.log(x));
    myObj.regular.forEach(x => console.log(x));

}

party(['m8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
]
)
