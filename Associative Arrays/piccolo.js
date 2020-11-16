function piccolo(input) {
    let myObj = {};

    for (let i of input) {
        let [command, carNumber] = i.split(", ");

        if (command == "IN") {
            myObj[carNumber] = command;
        } else {
            delete myObj[carNumber];
        }
    }

    let toSort = Object.keys(myObj);

    if (toSort.length > 0) {
        toSort.sort((a, b) => a.localeCompare(b))
            .forEach(x => {
                console.log(x);
            });
    } else {
        console.log("Parking Lot is Empty");
    }



}

piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']

);