const express = require("express");

const app = express();

app.use(express.json());

// function isOldEnough(age) {
//     return age >= 14;
// }

function isOldEnoughMiddleware(req, res, next) {
    if (req.query.age >= 14) {
        next();
    }
    else {
        res.json({
            msg: "Sorry, you are not of age yet!"
        });
    }
}

app.get("/ride1", isOldEnoughMiddleware, function (req, res) {
    // if (isOldEnough(req.query.age)) {
        res.json({
            msg: "You have successfully ridden the ride 1"
        });
    // }
    // else {
    //     res.json({
    //         msg: "Sorry, you are not of age yet!"
    //     });
    // }
})

app.get("/ride2", isOldEnoughMiddleware, function (req, res) {
    // if (isOldEnough(req.query.age)) {
        res.json({
            msg: "You have successfully ridden the ride 2"
        });
    // }
    // else {
    //     res.json({
    //         msg: "Sorry, you are not of age yet!"
    //     });
    // }
})

app.listen(3001);