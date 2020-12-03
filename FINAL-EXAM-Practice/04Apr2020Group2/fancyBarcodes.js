function solve(input) {
    let numBarcodes = Number(input.shift());
    for (let i of input) {
        //validate input
        let pattern = /@#+[A-Z][A-Za-z\d]{4,}[A-Z]@#+/g;

        let validBarcode = i.match(pattern);

        if (validBarcode === null) {

            console.log("Invalid barcode");

        } else {
            //determine product group, if no digits default "00"
            let productCode = "";
            let [toCheck] = validBarcode;
            for (let j of toCheck) {
                if (!isNaN(j)) {
                    productCode += j;
                }
            }
            if (productCode == "") {
                productCode = "00";
            }
            console.log(`Product group: ${productCode}`);
        }
    }
}

// solve(['3', '@#FreshFisH@#', '@###Brea0D@###', '@##Che46sE@##'])

solve([
    '6',
    '@###Val1d1teM@###',
    '@#ValidIteM@#',
    '##InvaliDiteM##',
    '@InvalidIteM@',
    '@#Invalid_IteM@#',
    '@#ValiditeM@#'
]);