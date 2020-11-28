function solve(text) {
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;

    let found = pattern.exec(text);
    let result = [];

    while (found != null) {
        result.push(found[0]);
        found = pattern.exec(text);
    }

    console.log(result.join(" "));

}

solve("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov")