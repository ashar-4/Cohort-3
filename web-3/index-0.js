const crypto = require('crypto');

function findHashWithPrefix(str) {
    let prefixStr = "100xdevs";
    let input = 0;
    while (true) {
        // console.log("prefix: " + prefixStr + "\tinput: " + input);
        const hashValue = crypto.createHash('sha256').update(prefixStr+input).digest('hex');
        if (hashValue.startsWith(str)) {
            return { input : prefixStr+input, hash: hashValue};
        }
        input++;
    }
}

let prefix = "00000";
let ans = findHashWithPrefix(prefix);
console.log(ans);