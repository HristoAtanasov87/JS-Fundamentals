function solve(input) {

    for (let text of input) {

        let patternSymbols = /[A-Za-z\W_]+/g;
        let patternNumbers = /\d+/g;

        let arraySymbols = text.match(patternSymbols);
        let arrayNumbers = text.match(patternNumbers);

        let toPrint = "";
        for (let i = 0; i < arraySymbols.length; i++) {
            let upCased = arraySymbols[i].toUpperCase();
            toPrint += upCased.repeat(arrayNumbers[i]);
        }

        let uniqueSymbols = [];

        for (let i = 0; i < toPrint.length; i++) {
            if (!uniqueSymbols.includes(toPrint[i])) {
                uniqueSymbols.push(toPrint[i]);
            }
        }

        console.log(`Unique symbols used: ${uniqueSymbols.length}`);
        console.log(toPrint);
    }

}


solve(['a3']);
solve(['aSd2&5s@1']);
solve(
    [
        'e-!btI17z=E:DMJ19U1Tvg VQ>11P"qCmo.-0YHYu~o%/%b.}a[=d15fz^"{0^/pg.Ft{W12`aD<l&$W&)*yF1WLV9_GmTf(d0($!$`e/{D\'xi]-~17 *%p"%|N>zq@ %xBD18<Y(fHh`@gu#Z#p"Z<v13fI]\':\\Iz.17*W:\\mwV`z-15g@hUYE{_$~}+X%*nytkW15'
    ]
);