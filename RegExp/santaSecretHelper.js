function solve(input) {

    let key = Number(input.shift());
    let command = input.shift();

    while (command != "end") {
        let pattern = /@(?<name>[A-Z][a-z]+)[^@\-!:]+!(?<behavior>[GN])!/g;
        let decrypted = "";
        for (let i = 0; i < command.length; i++) {
            let code = String.fromCharCode(command.charCodeAt(i) - key);
            decrypted += code;
        }
        let match = pattern.exec(decrypted);

        if (match === null) {
            command = input.shift();
            continue;
        }

        if (match.groups.behavior === "G") {
            console.log(match.groups.name);
        }

        command = input.shift();
    }
}

// solve([
//     '3',
//     'CNdwhamigyenumje$J$',
//     'CEreelh-nmguuejn$J$',
//     'CVwdq&gnmjkvng$Q$',
//     'end'
// ])

solve([
    '4',
    '~lwzjkl~jenlymfDFsffmiCwozwlzjln%K%',
    '0zfjrl}xnrlDWeqqmi/wnznlwzjnn%K%onhfhnf',
    ';:<lyiljz{onzDPere=;=9<;8=rhknlf%K%',
    "Wonvfkmwzkmpwvzkm'lhjnlDWeqerxle0wlnzj{nz%K%nohwn",
    'DReh}e=<4lhzj1%K%',
    'end'
])

// solve([
//     '3',
//     "N}eideidmk$'(mnyenmCNlpamnin$J$",
//     'ddddkkkkmvkvmCFrqqru-nvevek$J$nmgievnge',
//     'ppqmkkkmnolmnnCEhq/vkievk$Q$',
//     'yyegiivoguCYdohqwlqh/kguimhk$J$',
//     'end'
// ])