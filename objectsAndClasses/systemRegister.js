function systemRegister(input) {
    let systemReg = {};

    for (let iterator of input) {
        let [system, component, subcomponent] = iterator.split(" | ");

        if (!systemReg.hasOwnProperty(system)) {
            systemReg[system] = {};
        }

        if (!systemReg[system].hasOwnProperty(component)) {
            systemReg[system][component] = [];
        }

        systemReg[system][component].push(subcomponent);
    }

    let toSort = Object.entries(systemReg);

    for (let i = 0; i < toSort.length; i++) {
        let [system, componentObject] = toSort[i];

        let toSortComponent = Object.entries(componentObject);

        toSort[i] = [system, toSortComponent];
    }

    toSort.sort(([systemA, compA], [systemB, compB]) => {
        if (compA.length !== compB.length) {
            return compB.length - compA.length;
        } else {
            return systemA.localeCompare(systemB);
        }
    });

    for (let i = 0; i < toSort.length; i++) {

        let [system, componentArr] = toSort[i];
        componentArr.sort(([compA, subcompArrA], [compB, subcompArrB]) => subcompArrB.length - subcompArrA.length);

    }

    toSort.forEach(x => {
        let [system, comp] = x;
        console.log(system);
        comp.forEach(y => {
            let [component, subcomp] = y;
            console.log(`|||${component}`);
            subcomp.forEach(z => {
                console.log(`||||||${z}`);
            })
        })

    })
}

systemRegister([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
]
)