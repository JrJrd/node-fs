const { appendFile } = require("fs");
let content = "\nhello world".repeat(1000);

appendFile("./HelloWorld.txt", content, (err, data) => {
    if (err) {
        console.error(err);
    } else {
       
        console.log("done");
    }
});