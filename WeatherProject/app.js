const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {

    console.log(req.body.cityName);

    const query = req.body.cityName;
    const apikey = "b661f7f6435ffdd5a95bade1487e337e";
    const units = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?&q=" + query + "&appid=" + apikey + "&units=" + units;

    https.get(url, function (response) {
        console.log(response.statusCode);


        response.on("data", function (data) {
            const Weatherdata = JSON.parse(data);
            const temp = Weatherdata.main.temp;
            const icon = Weatherdata.weather[0].icon;
            const imgUrl = "https://openweathermap.org/img/wn/" + icon + "@2x.png"
            const description = Weatherdata.weather[0].description


            res.write("<h1> The temperature in " + query + " is " + temp + " degrees Celcius.</h1>");
            res.write("<h1>The weather is currently " + description + " </h1>");
            res.write("<img src= " + imgUrl + ">");

            res.send();
        });

    });


});

app.listen(3000, function () {
    console.log("server is rinning on port 3000. ");
});