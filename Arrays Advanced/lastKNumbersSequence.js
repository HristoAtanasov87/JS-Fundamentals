function solve(intN, intK) {
    let result = [1];

    for (let i = 1; i < intN; i++) {
        let nextElement = 0;

        if (intK < result.length) {
            for (let j = i - intK; j < i; j++) {
                nextElement += result[j];
            }
            result.push(nextElement);
        } else {
            for (let k = 0; k < result.length; k++) {
                nextElement += result[k];
            }
            result.push(nextElement);
        }
    }

    console.log(result.join(" "));

}
solve(8, 4);