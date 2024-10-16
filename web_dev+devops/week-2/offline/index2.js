const fs = require('fs');

function readFileAsync() {
    return new Promise(function(resolve, reject) {
        fs.readFile("asasdfsd.txt", "utf-8", function(err, data) {
            if (err) {
                reject("File not found");
            } else {
                resolve(data);
            }
        });
    });
}

readFileAsync()
    .then(function(x) {
        console.log("File has been read");
    })
    .catch(function(e) {
        console.log(e);
    })




100
100(routine)+ 200(culture)
100