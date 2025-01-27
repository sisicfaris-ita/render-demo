const express = require("express");
const {config} = require("dotenv");

config();

const app = express();

app.get("/health", (req: any, res: any) => {
    res.send("Server working");
});

app.get("/env", (req: any, res:any) => {
    res.send("Test value: " + process.env.TEST_VALUE);
});

app.listen(8080);

