function companyUsers(input) {
    let companyList = {};

    for (let iterator of input) {
        let [company, id] = iterator.split(" -> ");

        if (!companyList.hasOwnProperty(company)) {
            companyList[company] = [];
        }

        if (!companyList[company].includes(id)) {
            companyList[company].push(id);
        }

    }

    let toSort = Object.entries(companyList);

    toSort.sort(([companyA, idA], [companyB, idB]) => companyA.localeCompare(companyB));

    for (let [company, ids] of toSort) {
        console.log(company);
        ids.forEach(x => console.log(`-- ${x}`));
    }

}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]
);