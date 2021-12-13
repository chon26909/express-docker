const express = require("express");
const app = express();

count = 0

app.get("/", (req, res) => {
    console.log("count ", count+ 1);
    res.json({ result: "docker run", count: count++});
});

app.listen(4000, () => {
    console.log("server is running port 4000");
});

