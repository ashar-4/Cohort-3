const express = require("express")

// function calculateSum(n) {
//     let ans = 0;
//     for (let i = 1; i <= n; i++) {
//         ans += i;
//     }
//     return ans;
// }

const app = express();

app.use(express.json());

let users = [
    {
        name: "ashar",
        kidneys: [{
            healthy: false
        }]
    }
]


// app.get("/", function(req, res) {
//     const n = req.query.n;
//     const ans = calculateSum(n);
//     res.send(ans.toString());
// })

app.get("/", function(req, res) {
    const johnKidneys = users[0].kidneys;
    const numOfKidneys = johnKidneys.length;
    let numOfHealthyKidneys = 0;
    for (let i = 0; i < numOfKidneys; i++) {
        if (johnKidneys[i].healthy)
            numOfHealthyKidneys++;
    }
    const numOfUnhealthyKidneys = numOfKidneys - numOfHealthyKidneys;
    res.json({
        numOfKidneys,
        numOfHealthyKidneys,
        numOfUnhealthyKidneys
    });
})

app.post("/", function(req, res) {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    });
    res.json({
        msg: "Done!"
    });
})

app.put("/", function(req, res) {
    for (let i = 0; i < users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy = true;
    }
    res.json({});
})

app.delete("/", function(req, res) {
    const newKidneys = [];
    for (let i = 0; i < users[0].kidneys.length; i++) {
        if (users[0].kidneys[i].healthy) {
            newKidneys.push({
                healthy: true
            });
        }
    }
    users[0].kidneys = newKidneys;
    res.json({msg: "Deleted!"});

    // res.status(411).json({
    //     msg: "You have no unhealthy kidneys"
    // });
})

app.listen(3000);