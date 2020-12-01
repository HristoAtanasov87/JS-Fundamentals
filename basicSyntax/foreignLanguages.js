function solve(input) {
    let country = String(input);
    let result = "";

    switch (country) {
        case "England":
        case "USA":
            result = "English";
            break;
        case "Spain":
        case "Argentina":
        case "Mexico":
            result = "Spanish";
            break;
        default:
            result = "unknown";
    }

    console.log(result);
}

solve("aaa")