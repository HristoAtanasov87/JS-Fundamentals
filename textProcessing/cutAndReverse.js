function solve(string) {
    let firstHalf = string.slice(0, string.length / 2);
    let secondHalf = string.slice(string.length / 2);

    console.log(reverse(firstHalf));
    console.log(reverse(secondHalf));

    function reverse(line) {
        let toPrint = "";
        for (let i = line.length; i > 0; i--) {
            toPrint += line[i - 1];
        }

        return toPrint;
    }
}

solve('tluciffiDsIsihTgnizamAoSsIsihT');

solve('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');