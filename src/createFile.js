const {writeFile} = require("fs");

writeFile("./HelloWorld.txt", "Hello World!", (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("successfully created the file");
    }
})