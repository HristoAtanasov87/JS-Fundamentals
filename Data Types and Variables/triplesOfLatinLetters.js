function solve(number) {
    let firstLetter = "a".charCodeAt(0);

    for (let i = 0; i < number; i++) {
        for (let j = 0; j < number; j++) {
            for (let k = 0; k < number; k++) {
                let word = String.fromCharCode(
                    firstLetter + i,
                    firstLetter + j,
                    firstLetter + k,
                    );
                
                console.log(word);
            }
        }
    }
}

solve(3);