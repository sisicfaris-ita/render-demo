const express = require("express");

const app = express();

app.get("/health", (req, res) => {
    res.send("Server working");
});

app.listen(8080);

