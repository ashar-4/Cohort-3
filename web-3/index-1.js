
/*function arrayToHex(arr) {
    let result = "";
    for (let i = 0; i < arr.length; i++) {
        result += arr[i].toString(16).padStart(2, '0');
    }
    return result;
}

let arr = new Uint8Array([5, 12, 9, 15]);
let hexEncoding = arrayToHex(arr);

console.log(hexEncoding);*/

const crypto = require('crypto');

// Generate a random encryption key
const key = crypto.randomBytes(32);     // 32 bytes = 256 bits
const iv = crypto.randomBytes(16);      // Initialization vector

// Function to encrypt text
function encrypt(text) {
    const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
}

// Function to decrypt text
function decrypt(encryptedText) {
    const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
    let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

// Example usage
const textToEncrypt = 'Hello, World!';
const encryptedText = encrypt(textToEncrypt);
const decryptedText = decrypt(encryptedText);

console.log('Original Text:', textToEncrypt);
console.log('Encrypted Text:', encryptedText);
console.log('Decrypted Text:', decryptedText);