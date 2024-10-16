const fs = require('fs');

// function callback(err, contents) {
//     if (!err) {
//         console.log(`The contents of the file are:\n${contents}`);
//     }
//     else {
//         console.log("File not found!");
//     }
// }

// function resolve() {

// }

// function readFilePromisified() {
//     let f = fs.readFile("b.txt", "utf-8", function() {});
//     return new Promise(resolve);
// }

// let x = readFilePromisified().then(callback);

// console.log(x);


// function onDone() {
//     console.log("Operation completed!");
// }

// function cleanFile(fileName, onDone) {
//     fs.readFile(fileName, 'utf-8', (err, fileContents) => {
//         console.log(fileContents);
//         let cleanFileContents = fileContents.trim();
//         console.log(cleanFileContents);
//         fs.writeFile(fileName, cleanFileContents, (err) => {
//             onDone();
//         });
//     });
// }

// cleanFile("a.txt", onDone);

function cleanFile(filePath, cb) {
    return new Promise(function (resolve) {
        fs.readFile(filePath, 'utf-8', function (err, data) {
            data = data.trim();
            fs.writeFile(filePath, data, function() {
                resolve();
            });
        });
    });
}

async function main() {
    await cleanFile("a.txt");
    console.log("Done cleaning file");
}

main();