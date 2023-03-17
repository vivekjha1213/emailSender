const express = require("express");

const sendMail = require("./controller/sendMail");

const app = express();

const PORT = 5000;

app.get("/", (req, res) => {
    res.send("This Server is Running.......");
});

app.get("/email", sendMail);

const start = async() => {
    try {
        app.listen(PORT, () => {
            console.log("App is Running...");
        });
    } catch (error) {}
};

start();