const express = require("express");
// const cors = require("cors");

const app = express();

app.use(express.json());
// app.use(cors({
//     domains: ["http://localhost:57842", "http://192.168.1.7:57842"]
// }));

app.post("/sum", function(req, res) {
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);
    
    res.json({
        answer: a + b
    });
});

// using this we are hosting the front-end and the back-end on the same server, so then cors will not be required
// this practice is generally not followed nowadays, i.e., front-end and back-end are served separately on different servers
// but again, we use this in case of nextJS
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
})

app.listen(3000);