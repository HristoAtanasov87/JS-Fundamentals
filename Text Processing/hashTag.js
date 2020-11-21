function solve(string) {
    let arr = string.split(" ");
    let toPrint = [];

    for (let i of arr) {
        if (i.includes("#") && i.length > 1) {
            toPrint.push(i.substring(1));
        }
    }

    for (let i = 0; i < toPrint.length; i++) {
        for (let j = 0; j < toPrint[i].length; j++) {
            if (toPrint[i].charCodeAt(j) < 65 || (toPrint[i].charCodeAt(j) > 90 && toPrint[i].charCodeAt(j) < 97) || toPrint[i].charCodeAt(j) > 122) {
                toPrint.splice(i, 1);
            }
        }
    }


    console.log(toPrint.join("\n"));
}

solve('Nowadays everyone uses # to tag a #specia111l word in #socialMedia');