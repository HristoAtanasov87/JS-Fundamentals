function browserHistory(inputObject, inputArray) {
    for (let iterator of inputArray) {
        if (iterator !== "Clear History and Cache") {
            let temp = iterator.split(" ");
            let command = temp.slice(0, 1).join("");
            let website = temp.slice(1).join(" ");

            switch (command) {
                case "Close": {
                    let openTabsArray = inputObject["Open Tabs"];
                    for (let i of openTabsArray) {
                        if (i === website) {
                            let index = openTabsArray.indexOf(website);
                            openTabsArray.splice(index, 1);

                            let recentlyClosed = inputObject["Recently Closed"];
                            recentlyClosed.push(website);

                            let browserLogs = inputObject["Browser Logs"];
                            browserLogs.push(iterator);
                        }
                    }
                    break;
                }
                case "Open": {
                    let openTabsArray = inputObject["Open Tabs"];
                    openTabsArray.push(website);

                    let browserLogs = inputObject["Browser Logs"];
                    browserLogs.push(iterator);
                    break;
                }
            }
        } else {
            let openTabsArray = inputObject["Open Tabs"];
            openTabsArray.splice(0);

            let recentlyClosed = inputObject["Recently Closed"];
            recentlyClosed.splice(0);

            let browserLogs = inputObject["Browser Logs"];
            browserLogs.splice(0);
        }
    }

    for (i in inputObject) {

        if (i === "Browser Name") {
            console.log(inputObject[i]);
        } else {
            console.log(`${i}: ${inputObject[i].join(", ")}`);
        }
    }
}


browserHistory(
    {
        "Browser Name": "Mozilla Firefox",
        "Open Tabs": ["YouTube"],
        "Recently Closed": ["Gmail", "Dropbox"],
        "Browser Logs": ["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]
    },
    ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]

)