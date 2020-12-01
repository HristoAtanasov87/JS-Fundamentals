function studentGrades(input) {
    let list = {};

    for (let iterator of input) {
        let eachStudent = iterator.split(" ");
        let grades = eachStudent
            .slice(1)
            .map(Number);

        eachStudent = eachStudent.shift();

        if (list.hasOwnProperty(eachStudent)) {
            for (let i of grades) {
                list[eachStudent].push(i);
            }
        } else {
            list[eachStudent] = grades;
        }

    }


    let toSort = Object.entries(list);

    toSort.sort(sortAvg);

    for (let [name, grades] of toSort) {
        console.log(`${name}: ${grades.join(", ")}`);
    }

    function sortAvg([studentA, gradesA], [studentB, gradesB]) {
        let avgA = 0;
        gradesA.forEach(x => avgA += x);
        avgA /= gradesA.length;

        let avgB = 0;
        gradesB.forEach(y => avgB += y);
        avgB /= gradesB.length;

        return avgA - avgB;
    }
}

studentGrades(
    ['Lilly 4 6 6 5',
        'Tim 5 6',
        'Tammy 2 4 3',
        'Tim 6 6']
)