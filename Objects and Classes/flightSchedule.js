function schedule(input) {
    let flights = {};
    let list = input.shift();

    for (let i of list) {
        let [flightNum, destination] = i.split(" ");
        flights[flightNum] = {
            destination: destination,
            status: "Ready to fly"
        };
    }

    let statusChanges = input.shift();

    for (let i of statusChanges) {
        let [flightNum, newStatus] = i.split(" ");

        if (flights.hasOwnProperty(flightNum)) {
            flights[flightNum].status = newStatus;
        }
    }

    let filtered = Object.values(flights);
    let criteria = input.shift().join();

    for (let i of filtered) {
        if (i.status === criteria) {
            console.log(`{ Destination: '${i.destination}', Status: '${i.status}' }`);
        }
    }

}

schedule(
    [['WN269 Delaware',
        'FL2269 Oregon',
        'WN498 Las Vegas',
        'WN3145 Ohio',
        'WN612 Alabama',
        'WN4010 New York',
        'WN1173 California',
        'DL2120 Texas',
        'KL5744 Illinois',
        'WN678 Pennsylvania'],
    ['DL2120 Cancelled',
        'WN612 Cancelled',
        'WN1173 Cancelled',
        'SK330 Cancelled'],
    ['Ready to fly']
    ]

)