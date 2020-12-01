function movies(array) {
    let output = [];

    for (let iterator of array) {
        let myObj = {};

        if (iterator.includes("addMovie")) {
            let splitArray = iterator.split("addMovie ");
            splitArray.shift();
            let [movieName] = splitArray;
            myObj.name = movieName;
            output.push(myObj);

        } else if (iterator.includes("directedBy")) {
            let [movieName, director] = iterator.split(" directedBy ");

            for (let i of output) {
                if (i.name === movieName) {
                    i.director = director;
                }
            }

        } else if (iterator.includes("onDate")) {
            let [movieName, date] = iterator.split(" onDate ");

            for (let i of output) {
                if (i.name === movieName) {
                    i.date = date;
                }
            }
        }
    }



    for (let iterator of output) {
        if (iterator.name == undefined || iterator.director == undefined || iterator.date == undefined) {
            continue;
        } else {
            console.log(JSON.stringify(iterator));
        }
    }
}

movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    "addMovie CHush",
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]
);