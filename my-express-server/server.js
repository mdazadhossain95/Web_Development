const express = require('express');

const app = express();

app.get("/", function (req, res) {
    res.send("<h1>Hello, World</h1>");
});

app.get("/contact", function (req, res) {
    res.send("Contact me at : mdazadhossain95@gmail.com");

});

app.get("/about", function (req, res) {
    res.send("i am Md Azad Hossain Tutul.");
});

app.get("/hobbies", function (req, res) {
    res.send("<ul><li>Coffee</li><li>football</li><li>Beer</li></ul>");
});

app.listen(3000, function () {
    console.log("Server started on port 3000");
});
