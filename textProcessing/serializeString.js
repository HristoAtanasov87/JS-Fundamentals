function solve(input) {
    let string = input.shift();
    let myObj = {};

    for (let i = 0; i < string.length; i++) {
        if (myObj.hasOwnProperty(string[i])) {
            continue;
        }
        for (let j = 0; j < string.length; j++) {
            if (string[i] === string[j]) {
                if (!myObj.hasOwnProperty(string[i])) {
                    myObj[string[i]] = [];
                }

                myObj[string[i]].push(j);
            }
        }
    }

    for (let i in myObj) {
        console.log(`${i}:${myObj[i].join("/")}`);
    }
}

solve(['abababa', '']);