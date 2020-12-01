function register(input) {
    let list = {};

    for (let i = 0; i < input.length; i++) {
        let [name, grade, score] = input[i].split(", ");

        name = name.split(": ");
        grade = grade.split(": ");
        score = score.split(": ");

        let temp = Number(grade[1]);

        if (!list.hasOwnProperty(temp)) {
            list[temp] = [];
        }

        list[temp].push([name[1], score[1]]);

    }

    for (let i in list) {
        let valuesArray = list[i];

        let avgScore = 0
        let count = 0;
        let listStudents = [];

        for (let [name, score] of valuesArray) {
            if (Number(score) < 3) {
                continue;
            }
            count++;
            avgScore += Number(score);
            listStudents.push(name);
        }

        if (listStudents.length > 0) {
            console.log(`${Number(i) + 1} Grade`);
            console.log(`List of students: ${listStudents.join(", ")}`);
            console.log(`Average annual grade from last year: ${(avgScore / count).toFixed(2)}`);
            console.log();
        }
    }
}

register(
    ["Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
        "Student name: Ethan, Grade: 7, Graduated with an average score: 2.66",
        "Student name: George, Grade: 8, Graduated with an average score: 2.83",
        "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
        "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
        "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
        "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
        "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
        "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
        "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
        "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
        "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"]
)