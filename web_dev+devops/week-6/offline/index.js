const jwt = require("jsonwebtoken");

// generate, decode, verify

const value = {
    name: "ahsar",
    accountNumber: 123123123
};

// jwt
const token = jwt.sign(value, "secret");
console.log(token);

// the token has been generated using this secret, and hence this token can only be verified using this secret

const verifiedValue = jwt.verify(token, "secret");
console.log(verifiedValue);