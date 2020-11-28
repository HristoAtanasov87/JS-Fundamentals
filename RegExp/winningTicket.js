function solve(input) {
    let ticket = input[0].split(",");


    for (let i of ticket) {
        i = i.trim();
        let pattern = /\${6,10}|\^{6,10}|@{6,10}|#{6,10}/g;

        if (i.length === 20) {
            let leftHalf = i.substring(0, 10);
            let rightHalf = i.substring(10);

            let foundLeft = leftHalf.match(pattern);
            let foundRight = rightHalf.match(pattern);

            if (foundLeft === null || foundRight === null) {
                console.log(`ticket "${i}" - no match`);
                continue;
            }

            let leftSide = "";
            foundLeft.forEach(x => {
                if (x.length >= 6) {
                    leftSide = x;
                }
            })

            let rightSide = "";

            foundRight.forEach(x => {
                if (x.length >= 6) {
                    rightSide = x;
                }
            })

            if (((leftSide[0] === rightSide[0]) && (leftSide.length != 10) || (rightSide.length != 10))) {
                console.log(`ticket "${i}" - ${Math.min(leftSide.length, rightSide.length)}${leftSide[0]}`);
            } else if (leftSide.length === 10 && rightSide.length === 10) {
                console.log(`ticket "${i}" - ${leftSide.length}${leftSide[0]} Jackpot!`);
            } else {
                console.log(`ticket "${i}" - no match`);
            }
        } else {
            console.log("invalid ticket");
        }
    }
}

solve(['$$^^^^^^^^$$6^^^^^^^']
);