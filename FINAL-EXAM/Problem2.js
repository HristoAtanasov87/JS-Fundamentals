function solve(input) {
    let messages = Number(input.shift());

    for (let i = 1; i <= messages; i++) {
        let pattern = /^(\$|%)(?<tag>[A-Z][a-z]{3,})\1:\s\[(?<num1>\d+)\]\|\[(?<num2>\d+)\]\|\[(?<num3>\d+)\]\|$/g;

        let validMessage = input.shift();
        let results = pattern.exec(validMessage);

        if (results) {

            let tagToPrint = results.groups.tag;
            let firstNum = Number(results.groups.num1);
            let secondNum = Number(results.groups.num2);
            let thirdNum = Number(results.groups.num3);
            let wordToPrint = String.fromCharCode(firstNum) + String.fromCharCode(secondNum) + String.fromCharCode(thirdNum);

            console.log(`${tagToPrint}: ${wordToPrint}`);


        } else {
            console.log("Valid message not found!");
        }
    }


}

solve([
    '4',
    '$Request$: [73]|[115]|[105]|',
    '%Taggy$: [73]|[73]|[73]|',
    '%Taggy%: [118]|[97]|[108]|',
    '$Request$: [73]|[115]|[105]|[32]|[75]|'
]);

solve([
    '3',
    'This shouldnt be valid%Taggy%: [118]|[97]|[108]|',
    '$tAGged$: [97][97][97]|',
    '$Request$: [73]|[115]|[105]|true'
]);