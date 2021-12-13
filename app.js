const express = require("express");
const app = express();

conut = 0

app.get("/", (req, res) => {
    res.json({ result: "docker run", count: count++});
});

app.listen(4000, () => {
    console.log("server is running port 4000");
});

