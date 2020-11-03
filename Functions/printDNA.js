function solve(input) {
    let helixLength = input;
    let dnaChain = ["A", "T", "C", "G", "T", "T", "A", "G", "G", "G"];
    let toPrint = ["*", "*", "*", "*", "*", "*"];
    let counter = 0;

    for (let i = 1; i <= helixLength; i++) {
        counter++;
        
        if (counter === 1) {
            toPrint[0] = "*";
            toPrint[1] = "*";
            toPrint[2] = dnaChain.shift();
            dnaChain.push(toPrint[2]);
            toPrint[3] = dnaChain.shift();
            dnaChain.push(toPrint[3]);
            toPrint[4] = "*";
            toPrint[5] = "*";

            console.log(toPrint.join(""));

        } else if (counter === 2) {
            toPrint[0] = "*";
            toPrint[1] = dnaChain.shift();
            dnaChain.push(toPrint[1]);
            toPrint[2] = "-";
            toPrint[3] = "-";
            toPrint[4] = dnaChain.shift();
            dnaChain.push(toPrint[4]);
            toPrint[5] = "*";

            console.log(toPrint.join(""));

        } else if (counter === 3) {
            toPrint[0] = dnaChain.shift();
            dnaChain.push(toPrint[0]);
            toPrint[1] = "-"
            toPrint[2] = "-";
            toPrint[3] = "-";
            toPrint[4] = "-"
            toPrint[5] = dnaChain.shift();
            dnaChain.push(toPrint[5]);

            console.log(toPrint.join(""));

        } else if (counter === 4) {
            toPrint[0] = "*";
            toPrint[1] = dnaChain.shift();
            dnaChain.push(toPrint[1]);
            toPrint[2] = "-";
            toPrint[3] = "-";
            toPrint[4] = dnaChain.shift();
            dnaChain.push(toPrint[4]);
            toPrint[5] = "*";

            console.log(toPrint.join(""));
        }

        if (counter === 4) {
            counter = 0;
        }
    }
}

solve(5);


