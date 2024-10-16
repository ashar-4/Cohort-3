const jwt = require("jsonwebtoken");

const JWT_SECRET = "ashar_secret_code";

function auth(req, res, next) {
    const token = req.headers.authorization;
    try{
        const response = jwt.verify(token, JWT_SECRET);
        console.log(response);
        if (response) {
            req.userId = response.id;
            next();
        }
    } catch (e) {
        res.json({
            message: "Unauthorized token"
        });
    }
}

module.exports = {
    auth,
    JWT_SECRET
};